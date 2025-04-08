import { IsOptional, IsString, IsNumber, Min } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class GetProductsQueryDto extends PaginationDto{
  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
