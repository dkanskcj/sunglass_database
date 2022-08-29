import { Injectable } from '@nestjs/common';
import { Prisma, Stocktest } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StockService {
    constructor(private prisma: PrismaService) { }

    async Stock(
        productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
    ): Promise<Stocktest | null> {
        console.log(productWhereUniqueInput);

        return await this.prisma.stocktest.findUnique({
            where: productWhereUniqueInput
        });
    }

    async Stocks(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProductWhereUniqueInput;
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByWithRelationInput;
    }): Promise<Stocktest[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return await this.prisma.stocktest.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createStock(data: Prisma.StocktestCreateInput): Promise<Stocktest> {
        return await this.prisma.stocktest.create({
          data,
        });
      }

    async updateStock(params: {
        where: Prisma.ProductWhereUniqueInput;
        data: Prisma.ProductUpdateInput;
    }): Promise<Stocktest> {
        const { where, data } = params;
        return await this.prisma.stocktest.update({
            data,
            where,
        });
    }

    async deleteStock(where: Prisma.StocktestWhereUniqueInput): Promise<Stocktest> {
        return await this.prisma.stocktest.delete({
            where,
        });
    }
}
