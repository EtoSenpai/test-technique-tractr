import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindOneParams } from '../../utils/findOneParams';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<import(".prisma/client").Product[]>;
    findAllFilter(where: any, orderBy: any): Promise<void>;
    findOne({ id }: FindOneParams): Promise<import(".prisma/client").Product>;
    create(product: CreateProductDto): Promise<import(".prisma/client").Product>;
    update({ id }: FindOneParams, product: UpdateProductDto): Promise<import(".prisma/client").Product>;
    remove({ id }: FindOneParams): Promise<import(".prisma/client").Product>;
}
