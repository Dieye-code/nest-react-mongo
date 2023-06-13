import { Controller, Get, HttpStatus, Res, Param } from '@nestjs/common';
import { FindCategoryByIdQuery } from 'src/application/queries/category/findCategory.query';
import { GetCategoriesQuery } from 'src/application/queries/category/getcategories.query';

@Controller('products/')
export class ProductController {
    constructor(private getcategories: GetCategoriesQuery,
        private findCategory: FindCategoryByIdQuery){}

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


}
