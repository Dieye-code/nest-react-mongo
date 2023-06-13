import { Inject, Injectable } from "@nestjs/common";
import { CategoryRepository } from "src/infrastructure/repository/category.repository";

@Injectable()
export class FindCategoryByIdQuery{

    constructor(private categoryRepository: CategoryRepository){}

    public handle(id: number){
        return this.categoryRepository.get(id);
    }
}