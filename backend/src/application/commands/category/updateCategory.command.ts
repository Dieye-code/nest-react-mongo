import {Injectable} from '@nestjs/common'
import { CategoryEntity } from "src/infrastructure/entities/category.entity"
import { CategoryRepository } from "src/infrastructure/repository/category.repository"

export class UpdateCategoryCommand {

    id: number
    libelle: string
}

@Injectable()
export class UpdateCategoryCommandHandle {
    constructor(private categoryRepository: CategoryRepository) { }

    public async handle(command: UpdateCategoryCommand): Promise<void>{
        var category = new CategoryEntity();
        category.id = command.id;
        category.libelle = command.libelle;                
        var cat = await this.categoryRepository.update(category);
        return cat;

    }

}