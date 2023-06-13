import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { GetCategories } from 'src/application/queries/category/getcategories.query';

@Controller('products/')
export class ProductController {
    constructor(private getcategories: GetCategories){}

    @Get()
    public async getProducts(@Res() request): Promise<any>{
        const categories = await this.getcategories.handle();        
        return request.status(HttpStatus.OK).json(categories);
    }

}
