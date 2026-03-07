import prisma from "@/infra/database/database.config";
import { Prisma } from "@prisma/client";

export class ProductRepository {
    

    async getAllProducts(params : {
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByWithRelationInput;
        skip?: number;
        take?: number;
        select? : Prisma.ProductSelect;
    }) {
        return await prisma.product.findMany({
            where: {
                name: params.name ? { contains: params.name, mode: "insensitive" } : undefined,
                category: params.category ? { contains: params.category, mode: "insensitive" } : undefined,
            },
        });
    }

    async getProductById(id: string) {
        return await prisma.product.findUnique({
            where: { id },
        });
    }

    async createProduct(productData: any) {
        return await prisma.product.create({
            data: productData,
        });
    }

    async updateProduct(id: string, productData: any) {
        return await prisma.product.update({
            where: { id },
            data: productData,
        });
    }

    async deleteProduct(id: string) {
        return await prisma.product.delete({
            where: { id },
        });
    }
}