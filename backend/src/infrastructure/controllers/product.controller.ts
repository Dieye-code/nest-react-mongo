import { Controller, Get, HttpStatus, Res, Param, Post, Body } from '@nestjs/common';
import { CreateCategoryCommand, CreateCategoryCommandHandler } from 'src/application/commands/category/createCategory.command';
import { FindCategoryByIdQuery } from 'src/application/queries/category/findCategory.query';
import { GetCategoriesQuery } from 'src/application/queries/category/getcategories.query';
import { CategoryRepository } from '../repository/category.repository';

@Controller('products/')
export class ProductController {
    constructor(
        private getcategories: GetCategoriesQuery,
        private findCategory: FindCategoryByIdQuery,
        private createCategory: CreateCategoryCommandHandler
        ){}

    @Get()
    public async getProducts(@Res() request): Promise<any>{
        const categories = await this.getcategories.handle();        
        return request.status(HttpStatus.OK).json(categories);
    }

    @Get(':id')
    public async getCategoryById(@Res() request, @Param('id') id: number) :Promise<any>{
        var category = await this.findCategory.handle(id);
        return request.status(HttpStatus.OK).json(category)
    }

    @Post()
    public async create(@Res() request, @Body() command: CreateCategoryCommand): Promise<any>{
        const category = this.createCategory.handle(command);
        return request.status(HttpStatus.CREATED).json(category);
    }


}
