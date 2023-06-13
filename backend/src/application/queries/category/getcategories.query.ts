import { CategoryEntity } from "src/infrastructure/entities/category.entity";
import { CategoryRepository } from "src/infrastructure/repository/category.repository";
import {Injectable, Inject} from '@nestjs/common'

@Injectable()
export class GetCategories{
    constructor (@Inject(CategoryRepository)private categoryRepository: CategoryRepository){}

    public async handle(): Promise<CategoryEntity[]>{
        return await this.categoryRepository.getAll();
    }

}