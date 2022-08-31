import { Injectable } from '@nestjs/common';
import { Prisma, Shipping } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShippingService {
    constructor(private prisma: PrismaService) { }

    async Shipping(
        shippingWhereUniqueInput: Prisma.ShippingWhereUniqueInput,
    ): Promise<Shipping | null> {
        console.log(shippingWhereUniqueInput);

        return await this.prisma.shipping.findUnique({
            where: shippingWhereUniqueInput
        });
    }

    async Shippings(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ShippingWhereUniqueInput;
        where?: Prisma.ShippingWhereInput;
        orderBy?: Prisma.ShippingOrderByWithRelationInput;
    }): Promise<Shipping[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return await this.prisma.shipping.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createShipping(data: Prisma.ShippingCreateInput): Promise<Shipping> {
        return await this.prisma.shipping.create({
          data,
        });
      }

    async updateShipping(params: {
        where: Prisma.ShippingWhereUniqueInput;
        data: Prisma.ShippingUpdateInput;
    }): Promise<Shipping> {
        const { where, data } = params;
        return await this.prisma.shipping.update({
            data,
            where,
        });
    }

    async deleteShipping(where: Prisma.ShippingWhereUniqueInput): Promise<Shipping> {
        return await this.prisma.shipping.delete({
            where,
        });
    }
}
