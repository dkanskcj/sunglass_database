import { Injectable } from '@nestjs/common';
import { Ordertest, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as dayjs from 'dayjs';


@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) { }

    async Order(
        orderWhereUniqueInput: Prisma.OrdertestWhereUniqueInput,
    ): Promise<Ordertest | null> {
        console.log(orderWhereUniqueInput);

        return await this.prisma.ordertest.findUnique({
            where: orderWhereUniqueInput
        });
    }


    async totalCount(){
        return await this.prisma.ordertest.count();
    }

    async Orders(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.OrdertestWhereUniqueInput;
        where?: Prisma.OrdertestWhereInput;
        orderBy?: Prisma.OrdertestOrderByWithRelationInput;
    }): Promise<Ordertest[]> {
        const { skip, take, cursor, where, orderBy } = params;
        const test = await this.prisma.ordertest.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
        return await this.prisma.ordertest.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async test(date1: string) {
        const items = await this.prisma.ordertest.findMany()
        return items.filter(item => dayjs(item.createdAt).isAfter(dayjs(date1)));
    }

    async createOrder(data: Prisma.OrdertestCreateInput): Promise<Ordertest> {
        return await this.prisma.ordertest.create({
          data,
        });
      }

    async updateOrder(params: {
        where: Prisma.OrdertestWhereUniqueInput;
        data: Prisma.OrdertestUpdateInput;
    }): Promise<Ordertest> {
        const { where, data } = params;
        return await this.prisma.ordertest.update({
            data,
            where,
        });
    }

    async deleteOrder(where: Prisma.OrdertestWhereUniqueInput): Promise<Ordertest> {
        return await this.prisma.ordertest.delete({
            where,
        });
    }
}



