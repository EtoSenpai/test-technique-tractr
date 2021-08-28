import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Product, Prisma } from '@prisma/client';
export declare class ProductService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findAllFilter(params: {
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByInput;
    }): Promise<Product[]>;
    findOne(id: number): Promise<Product | null>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<Product>;
}
