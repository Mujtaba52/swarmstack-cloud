import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { ProductCategory } from 'src/common/entities/productCategory.entity';
import { ProductImages } from 'src/common/entities/productImages.entity';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.STRING)
  thumbnailUrl: string;

  @Column(DataType.FLOAT)
  price: string;

  @HasMany(() => ProductImages)
  productImages: ProductImages[];

  @HasMany(() => ProductCategory)
  productCategory: ProductCategory[];

  @CreatedAt
  @Column({ type: DataType.DATE, allowNull: false })
  createdAt: Date;

  @DeletedAt
  @Column({ type: DataType.DATE, allowNull: true })
  deletedAt?: Date;
}
