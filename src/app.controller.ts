import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { OptionService } from './option/option.service';
import { ProductService } from './product/product.service';
import { Product, Option, Company } from '@prisma/client'
import { CompanyService } from './company/company.service';

@Controller()
export class AppController {
  constructor(
    private readonly productService: ProductService,
    private readonly optionService: OptionService,
    private readonly companyService: CompanyService
  ) { }

  @Get('company')
  async getCompanys(): Promise<Company[]> {
    return this.companyService.companys({});
    // return '회사명';
  }
  @Get('company/:id')
  async getCompanyById(@Param('id') id: string): Promise<Company> {
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
