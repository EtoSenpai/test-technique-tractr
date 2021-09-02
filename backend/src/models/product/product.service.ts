import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Product, Prisma} from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ProductNotFoundException } from '../../exceptions/productNotFound.exception';
import { PrismaError } from '../../utils/prismaError';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.prismaService.product.create({
      data: createProductDto,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByInput;
  }): Promise<Product[]>  {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prismaService.product.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(id: number): Promise<Product | null> {
    const product = await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) {
      throw new ProductNotFoundException(id);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    try {
      return await this.prismaService.product.update({
        data: {
          ...updateProductDto,
          id: undefined,
        },
        where: {
          id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === PrismaError.RecordDoesNotExist){
        throw new ProductNotFoundException(id);
      }
      throw error;
    }
  }

  async remove(id: number): Promise<Product> {
    try {
      return this.prismaService.product.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === PrismaError.RecordDoesNotExist){
        throw new ProductNotFoundException(id);
      }
      throw error;
    }
  }
}