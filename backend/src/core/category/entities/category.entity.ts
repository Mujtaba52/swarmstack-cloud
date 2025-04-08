import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
  } from 'sequelize-typescript';
import { ProductCategory } from 'src/common/entities/productCategory.entity';
  
  @Table({
    timestamps: true,
    paranoid: true,
  })
  export class Category extends Model<Category> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    name: string;
  
    @Column({
      type: DataType.TEXT,
      allowNull: true,
    })
    description: string;

    @HasMany(() => ProductCategory)
    productCategories: ProductCategory[];
  
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
  