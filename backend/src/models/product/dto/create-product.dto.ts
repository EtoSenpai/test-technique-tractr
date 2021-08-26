import { IsString, IsNotEmpty, IsNumber, IsDate , IsBoolean} from 'class-validator';

export class CreateProductDto {
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
