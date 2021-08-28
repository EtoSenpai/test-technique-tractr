"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class ProductNotFoundException extends common_1.NotFoundException {
    constructor(productId) {
        super(`Post with id ${productId} not found`);
    }
}
exports.ProductNotFoundException = ProductNotFoundException;
//# sourceMappingURL=productNotFound.exception.js.map