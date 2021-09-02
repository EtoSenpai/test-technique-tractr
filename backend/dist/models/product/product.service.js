"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const runtime_1 = require("@prisma/client/runtime");
const productNotFound_exception_1 = require("../../exceptions/productNotFound.exception");
const prismaError_1 = require("../../utils/prismaError");
let ProductService = class ProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createProductDto) {
        return this.prismaService.product.create({
            data: createProductDto,
        });
    }
    async findAll(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return await this.prismaService.product.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async findOne(id) {
        const product = await this.prismaService.product.findUnique({
            where: {
                id,
            },
        });
        if (!product) {
            throw new productNotFound_exception_1.ProductNotFoundException(id);
        }
        return product;
    }
    async update(id, updateProductDto) {
        try {
            return await this.prismaService.product.update({
                data: Object.assign(Object.assign({}, updateProductDto), { id: undefined }),
                where: {
                    id,
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError && error.code === prismaError_1.PrismaError.RecordDoesNotExist) {
                throw new productNotFound_exception_1.ProductNotFoundException(id);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            return this.prismaService.product.delete({
                where: {
                    id,
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError && error.code === prismaError_1.PrismaError.RecordDoesNotExist) {
                throw new productNotFound_exception_1.ProductNotFoundException(id);
            }
            throw error;
        }
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map