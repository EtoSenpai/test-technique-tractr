import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsNotEmpty, IsNumber, IsDate , IsBoolean} from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    content: string;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date;
    
    @IsBoolean()
    isActive: boolean;
}
