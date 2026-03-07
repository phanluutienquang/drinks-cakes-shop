import { ProductRepository } from "./product.repository";

export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    // async getAllProducts() {
    //     return this.productRepository.getAllProducts({});
    // }

    async getProductById(id: string) {
        return this.productRepository.getProductById(id);
    }

    async createProduct(productData: any) {
        return this.productRepository.createProduct(productData);
    }

    async updateProduct(id: string, productData: any) {
        return this.productRepository.updateProduct(id, productData);
    }

    async deleteProduct(id: string) {
        return this.productRepository.deleteProduct(id);
    }
}   