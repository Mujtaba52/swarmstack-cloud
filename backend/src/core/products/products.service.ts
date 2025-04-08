import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { GetProductsQueryDto } from './dto/get-products.dto';
import Sequelize, { FindOptions, Op, Options } from 'sequelize';
import { ProductImages } from 'src/common/entities/productImages.entity';
import { ProductCategory } from 'src/common/entities/productCategory.entity';
import { Category } from '../category/entities/category.entity';
import { AiService } from '../ai/services/ai.service';
import { PineconeService } from '../ai/services/pinecone.service';
@Injectable()
export class ProductsService {

  constructor(private readonly aiService: AiService, private readonly pineconeService: PineconeService) {} // Inject AiService

  async findAll(getProductsQueryDto: GetProductsQueryDto) {
    const { page = 1, limit = 50, category, name } = getProductsQueryDto;
    const offset = (page - 1) * limit;
    let categoryFilter = {};
    let nameFilter = {};
    if (category) {
      categoryFilter = {name :category};
    }

    if (name) {
      nameFilter = {name : { [Op.like]: `%${name}%` }};
    }

    const result = await Product.findAndCountAll({
      attributes: [
        'id', 
        'name', 
        'description', 
        'thumbnailUrl', 
        'price', 
        'createdAt', 
        'updatedAt', 
        'deletedAt'
      ],
      include: [{
        model: ProductCategory,
        as: 'productCategory',
        attributes: [],
        include : [{
          model: Category,
          as : 'category',
          attributes : [['name', 'name']],
          where : { ...categoryFilter }
        }]
      }],
      where : { ...nameFilter},
      limit,
      offset,
      raw: true,
      distinct: true
    });

    return {
      products: result.rows, 
      totalRecords: result.count,
      currentPage: page,
      totalPages: Math.ceil(result.count / limit),
    };
    }

  async findOne(option: FindOptions) {
    option.include = {
      model: ProductImages,
      as: 'productImages',
      attributes: ['imageUrl'],
    }
    const product = (await Product.findOne(option)).toJSON();
    const { productImages, ...rest } = product;
    return {...rest, images: productImages.map((_)=>_.imageUrl) }
  }
  async generateProductEmbeddings() {
    // Use `aiService.embedding` and `aiService.pinecone`
    const products = await Product.findAll({
      attributes: ['id', 'name', 'description', 'price', 'thumbnailUrl', 'createdAt'],
      include: [{
        model: ProductCategory,
        as: 'productCategory',
        attributes: [],
        include: [{
          model: Category,
          as: 'category',
          attributes: [['name', 'name']],
        }],
      }],
      raw: true,
    });

    const batchSize = 10;
    const vectors = [];

    for (let i = 0; i < products.length; i += batchSize) {
      const batch = products.slice(i, i + batchSize);
      const textsToEmbed = batch.map(product => 
        `Product Name: ${product.name}. Description: ${product.description}. Price: $${product.price}`
      );

      // Use AiService's embedding instance
      const embeddings = await this.pineconeService.generateEmbedding(textsToEmbed);

      embeddings.forEach((vector, index) => {
        const product = batch[index];
        vectors.push({
          id: product.id.toString(),
          values: vector,
          metadata: {
            name: product.name,
            price: product.price,
            thumbnailUrl: product.thumbnailUrl,
            createdAt: product.createdAt,
            category: product['category.name'],
          },
        });
      });
    }

    await this.pineconeService.createVectors(vectors); 

    return { message: "Embeddings generated and stored successfully!" };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
