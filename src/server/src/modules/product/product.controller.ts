import { ProductService } from "./product.service";

export class ProductController {
    constructor(private productService: ProductService) {}

    // async getAllProducts(req: any, res: any) {
    //     try {
    //         const products = await this.productService.getAllProducts();
    //         res.json(products);
    //     } catch (error) {
    //         res.status(500).json({ error: "Failed to fetch products" });
    //     }
    // }

    async getProductById(req: any, res: any) {
        try {
            const product = await this.productService.getProductById(req.params.id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ error: "Product not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch product" });
        }
    }

    async createProduct(req: any, res: any) {
        try {
            const newProduct = await this.productService.createProduct(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: "Failed to create product" });
        }
    }

    async updateProduct(req: any, res: any) {
        try {
            const updatedProduct = await this.productService.updateProduct(req.params.id, req.body);
            if (updatedProduct) {
                res.json(updatedProduct);
            } else {
                res.status(404).json({ error: "Product not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to update product" });
        }
    }

    async deleteProduct(req: any, res: any) {
        try {
            const deletedProduct = await this.productService.deleteProduct(req.params.id);
            if (deletedProduct) {
                res.json({ message: "Product deleted successfully" });
            } else {
                res.status(404).json({ error: "Product not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to delete product" });
        }
    }
}