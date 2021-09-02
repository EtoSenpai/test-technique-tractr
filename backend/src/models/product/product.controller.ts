import { Controller, Get, Post, Body, Param, Delete, Put, Query} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindOneParams } from '../../utils/findOneParams';
import { query } from 'express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(){
    return this.productService.findAll({});
  }

  @Get('Research/?')
  async findAllFilter(@Query('name') name:string, @Query('prix') prix:number, @Query('order') order){
    return this.productService.findAll({
      where: { name: String(name), prix: Number(prix)},
      orderBy:{ id: order} 
    });
  }
 
  @Get(':id')
  async findOne(@Param() { id }: FindOneParams){
    return this.productService.findOne(Number(id));
  }
 
  @Post()
  async create(@Body() product: CreateProductDto){
    return this.productService.create(product);
  }
 
  @Put(':id')
  async update(@Param() { id }: FindOneParams, @Body() product: UpdateProductDto){
    return this.productService.update(Number(id), product);
  }
 
  @Delete(':id')
  async remove(@Param() { id }: FindOneParams) {
    return this.productService.remove(Number(id));
  }
}
