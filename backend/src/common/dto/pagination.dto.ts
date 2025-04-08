import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class PaginationDto {
    @IsOptional()
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber({}, { message: 'page must be a number' })
    @Min(1, { message: 'page must be greater than 0' })
    page: number;

    @IsOptional()
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber({}, { message: 'limit must be a number' })
    @Min(1, { message: 'limit must be greater than 0' })
    limit: number;
}