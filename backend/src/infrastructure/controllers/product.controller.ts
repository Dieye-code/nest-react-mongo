import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

@Controller('products/')
export class ProductController {
    constructor(){}

    @Get()
    public async getProducts(@Res() request): Promise<any>{
        return request.status(HttpStatus.OK).json();
    }

}
