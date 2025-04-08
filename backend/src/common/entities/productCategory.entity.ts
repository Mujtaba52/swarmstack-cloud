import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
import { Category } from 'src/core/category/entities/category.entity';
  import { Product } from 'src/core/products/entities/product.entity';
  
  @Table({
    timestamps: true,
    paranoid: true,
  })
  export class ProductCategory extends Model<ProductCategory> {
    @PrimaryKey
    @ForeignKey(() => Product)
    @Column(DataType.INTEGER)
    productId: number;
  
    @BelongsTo(() => Product)
    product: Product;
  
    @PrimaryKey
    @ForeignKey(() => Category)
    @Column(DataType.INTEGER)
    categoryId: number;
  
    @BelongsTo(() => Category)
    category: Category;
  
    @Column({
      allowNull: false,
      type: DataType.DATE,
    })
    createdAt: Date;
  
    @Column({
      allowNull: true,
      type: DataType.DATE,
    })
    updatedAt: Date;
  
    @Column({
      allowNull: true,
      type: DataType.DATE,
    })
    deletedAt: Date;
  }
  