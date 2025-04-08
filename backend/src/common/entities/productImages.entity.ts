import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
import { Product } from 'src/core/products/entities/product.entity';
  
  @Table({
    timestamps: true,
    paranoid: true,
  })
  export class ProductImages extends Model<ProductImages> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
  
    @ForeignKey(() => Product)
    @Column
    productId: number;

    @BelongsTo(() => Product)
    product: Product;
  
    @Column(DataType.STRING)
    imageUrl: string;

  }
  