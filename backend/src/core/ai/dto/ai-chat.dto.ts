import { IsNotEmpty, IsString } from "class-validator";

export class ChatDto {
    @IsString({ message: 'Query must be a string' })
    @IsNotEmpty({ message: 'Query cannot be empty' })
    query: string;
}