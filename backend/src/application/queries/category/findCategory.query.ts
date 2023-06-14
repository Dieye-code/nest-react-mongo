import { Inject, Injectable } from "@nestjs/common";
import { Category } from "src/domaine/models/Category";
import { CategoryRepository } from "src/infrastructure/repository/category.repository";

@Injectable()
export class FindCategoryByIdQuery{

    constructor(private categoryRepository: CategoryRepository){}

    public async  handle(id: number): Promise<Category>{
        return await this.categoryRepository.get(id);
    }
}