import { CategoryRepository } from "src/infrastructure/repository/category.repository";
import {Injectable, Inject} from '@nestjs/common'
import { Category } from "src/domaine/models/Category";

@Injectable()
export class GetCategoriesQuery{
    constructor (@Inject(CategoryRepository)private categoryRepository: CategoryRepository){}

    public async handle(): Promise<Category[]>{
        return await this.categoryRepository.getAll();
    }

}