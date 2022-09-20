import { Injectable } from '@nestjs/common';
import { Prisma, Company } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {



  constructor(private prisma: PrismaService) { }

  async Company(
    CompanyWhereUniqueInput: Prisma.CompanyWhereUniqueInput,
  ): Promise<Company | null> {
    console.log('CompanyWhereUniqueInput : ',CompanyWhereUniqueInput);

    return await this.prisma.company.findUnique({
      where: CompanyWhereUniqueInput
    });
  }

  async totalCount() {
    return await this.prisma.company.count();
  }

  async companys(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CompanyWhereUniqueInput;
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithRelationInput;
  }): Promise<Company[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.company.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCompany(data: Prisma.CompanyCreateInput): Promise<Company> {
    return await this.prisma.company.create({
      data,
    });
  }

  async updateCompany(params: {
    where: Prisma.CompanyWhereUniqueInput;
    data: Prisma.CompanyUpdateInput;
  }): Promise<Company> {
    const { where, data } = params;
    return await this.prisma.company.update({
      data,
      where,
    });
  }

  async deleteCompany(where: Prisma.CompanyWhereUniqueInput): Promise<Company> {
    return await this.prisma.company.delete({
      where,
    });
  }
}
