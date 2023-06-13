import { Controller, Get, HttpStatus, Res, Param, Post, Body, Put, Delete, NotFoundException } from '@nestjs/common';
import { CreateCategoryCommand, CreateCategoryCommandHandler } from 'src/application/commands/category/createCategory.command';
import { FindCategoryByIdQuery } from 'src/application/queries/category/findCategory.query';
import { GetCategoriesQuery } from 'src/application/queries/category/getcategories.query';
import { UpdateCategoryCommand, UpdateCategoryCommandHandle } from 'src/application/commands/category/updateCategory.command';
import { DeleteCategoryCommand } from 'src/application/commands/category/deletecategory.command';

@Controller('products/')
export class ProductController {
    constructor(
        private getcategories: GetCategoriesQuery,
        private findCategory: FindCategoryByIdQuery,
        private createCategory: CreateCategoryCommandHandler,
        private updateCategory: UpdateCategoryCommandHandle,
        private deleteCategory: DeleteCategoryCommand
        ){}

    @Get()
    public async getProducts(@Res() request): Promise<any>{
        const categories = await this.getcategories.handle();        
        return request.status(HttpStatus.OK).json(categories);
    }

    @Get(':id')
    public async getCategoryById(@Res() request, @Param('id') id: number) :Promise<any>{
        var category = await this.findCategory.handle(id);
        if(category == null){
            throw new NotFoundException("Category Not Found")
        }
        return request.status(HttpStatus.OK).json(category)
    }

    @Post()
    public async create(@Res() request, @Body() command: CreateCategoryCommand): Promise<any>{
        const category = this.createCategory.handle(command);
        return request.status(HttpStatus.CREATED).json(category);
    }

    @Put(':id')
    public async update(@Res() request, @Body() command : UpdateCategoryCommand, @Param('id')id: number): Promise<any>{
        var category = await this.updateCategory.handle(command);
        if(category == null){
            throw new NotFoundException("Category not found");
        }
        return request.status(HttpStatus.OK).json(category);
    }

    @Delete(':id')
    public async delete(@Res() request, @Param('id')id: number): Promise<any>{
        var category = await this.deleteCategory.handle(id);
        return request.status(HttpStatus.OK).json(category);
    }


}
