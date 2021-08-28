import { IsString, IsNotEmpty, IsNumber, IsDate , IsBoolean } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    prix: number;
}
