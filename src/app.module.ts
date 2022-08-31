import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductService } from './product/product.service';
import { OptionService } from './option/option.service';
import { CompanyService } from './company/company.service';
import { StockService } from './stock/stock.service';
import { OrderService } from './order/order.service';
import { ShippingService } from './shipping/shipping.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, ProductService, OptionService ,CompanyService, StockService, OrderService, ShippingService],
})
export class AppModule {}
