import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsNotEmpty, IsNumber, IsDate , IsBoolean} from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    prix: number;
    
    @IsBoolean()
    isActive: boolean;
}
