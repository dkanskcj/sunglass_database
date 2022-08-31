import { Body, Controller, Delete, Get, Param, Put, Post, ParseIntPipe } from '@nestjs/common';
import { OptionService } from './option/option.service';
import { ProductService } from './product/product.service';
import { Product, Option, Company, Stocktest, Shipping, Ordertest } from '@prisma/client'
import { CompanyService } from './company/company.service';
import { StockService } from './stock/stock.service';
import { OrderService } from './order/order.service';
import { ShippingService } from './shipping/shipping.service';

@Controller()
export class AppController {
  constructor(
    private readonly productService: ProductService,
    private readonly optionService: OptionService,
    private readonly companyService: CompanyService,
    private readonly stockService: StockService,
    private readonly orderService: OrderService,
    private readonly shippingService: ShippingService
  ) { }
  // company
  @Get('company')
  async getCompanys(): Promise<Company[]> {
    return this.companyService.companys({});
    // return '회사명';
  }
  @Get('company/:id')
  async getCompanyById(@Param('id', new ParseIntPipe()) id: string): Promise<Company> {
    console.log(id);

    return this.companyService.Company({ id: Number(id) });
  }
  @Get('company/:queue')
  async getCompanyBySearch(
    @Param('queue') queue: string,
  ): Promise<Company[]> {
    return this.companyService.companys({
      where: {
        name: { contains: queue },
      },
    });
  }
  @Post('company')
  async createCompany(
    @Body() company: Company,
  ): Promise<Company> {

    return this.companyService.createCompany(company);
  }
  @Put('company/:id')
  async updateCompany(
    @Param('id') id: number,
    @Body() company: Product
  ): Promise<Company> {
    return this.companyService.updateCompany({
      where: { id: Number(id) },
      data: company
    });
  }

  // stock
  @Get('stocktest')
  async getStocks(): Promise<Stocktest[]> {
    return this.stockService.Stocks({});
    // return '회사명';
  }
  @Get('stocktest/:id')
  async getStockById(@Param('id') id: string): Promise<Stocktest> {
    console.log(id);

    return this.stockService.Stock({ id: Number(id) });
  }
  @Get('stocktest/:queue')
  async getStockBySearch(
    @Param('queue') queue: string,
  ): Promise<Stocktest[]> {
    return this.stockService.Stocks({
      where: {
        name: { contains: queue },
      },
    });
  }
  @Post('stocktest')
  async createStock(
    @Body() stock: Stocktest,
  ): Promise<Stocktest> {

    return this.stockService.createStock(stock);
  }
  @Put('stocktest/:id')
  async updateStock(
    @Param('id') id: number,
    @Body() stock: Stocktest
  ): Promise<Stocktest> {
    return this.stockService.updateStock({
      where: { id: Number(id) },
      data: stock
    });
  }
  // shipping
  @Get('shipping')
  async getShippings(): Promise<Shipping[]> {
    return this.shippingService.Shippings({});
    // return '회사명';
  }
  @Get('shipping/:id')
  async getShippingById(@Param('id') id: string): Promise<Shipping> {
    console.log(id);

    return this.shippingService.Shipping({ id: Number(id) });
  }
  @Get('shipping/:queue')
  async getShippingBySearch(
    @Param('queue') queue: string,
  ): Promise<Shipping[]> {
    return this.shippingService.Shippings({
      where: {
        // name: { contains: queue },
        coupon: {contains: queue}
      },
    });
  }

  @Post('shipping')
  async createShipping(
    @Body() shipping: Shipping,
  ): Promise<Shipping> {

    return this.shippingService.createShipping(shipping);
  }
  @Put('shipping/:id')
  async updateShipping(
    @Param('id') id: number,
    @Body() shipping: Shipping
  ): Promise<Shipping> {
    return this.shippingService.updateShipping({
      where: { id: Number(id) },
      data: shipping
    });
  }

  // order
  @Get('ordertest')
  async getOrders(): Promise<Ordertest[]> {
    return this.orderService.Orders({});
    // return '회사명';
  }
  @Get('ordertest/:orderNumber')
  async getOrderById(@Param('orderNumber') orderNumber: string): Promise<Ordertest> {
    console.log(orderNumber);

    return this.orderService.Order({ orderNumber: Number(orderNumber) });
  }
  @Get('ordertest/:queue')
  async getOrderBySearch(
    @Param('queue') queue: string,
  ): Promise<Ordertest[]> {
    return this.orderService.Orders({
      where: {
        orderName: {contains: queue}
      },
    });
  }
  @Post('ordertest')
  async createOrder(
    @Body() order: Ordertest,
  ): Promise<Ordertest> {

    return this.orderService.createOrder(order);
  }
  @Put('ordertest/:id')
  async updateOrder(
    @Param('orderNumber') orderNumber: number,
    @Body() order: Ordertest
  ): Promise<Ordertest> {
    return this.orderService.updateOrder({
      where: { orderNumber: Number(orderNumber) },
      data: order
    });
  }

  // product
  @Get('product')
  async getOption(): Promise<Product[]> {
    return this.productService.products({});
  }



  @Get('product/:id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    console.log(id);

    return this.productService.product({ id: Number(id) });
  }

  @Get('product/:queue')
  async getProductBySearch(
    @Param('queue') queue: string,
  ): Promise<Product[]> {
    return this.productService.products({
      where: {
        name: { contains: queue },
      },
    });
  }

  @Post('product')
  async createProduct(
    @Body() product: Product,
  ): Promise<Product> {

    return this.productService.createProduct(product);
  }

  // option
  @Post('option')
  async createOption(
    @Body() option: Option,
  ): Promise<Option> {
    return this.optionService.createOption(option);
  }

  @Put('product/:id')
  async updateProduct(
    @Param('id') id: number,
    @Body() product: Product
  ): Promise<Product> {
    return this.productService.updateProduct({
      where: { id: Number(id) },
      data: product
    });
  }

  @Delete('product/:id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.deleteProduct({ id: Number(id) });
  }
}
