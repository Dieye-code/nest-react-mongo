import {Injectable} from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { CategoryEntity } from "src/infrastructure/entities/category.entity"
import { CategoryRepository } from "src/infrastructure/repository/category.repository"

export class UpdateCategoryCommand {

    @ApiProperty()
    id: number
    @ApiProperty()
    libelle: string
}

@Injectable()
export class UpdateCategoryCommandHandle {
    constructor(private categoryRepository: CategoryRepository) { }

    public async handle(command: UpdateCategoryCommand): Promise<CategoryEntity>{
        var category = new CategoryEntity();
        category.id = command.id;
        category.libelle = command.libelle;                
        var cat = await this.categoryRepository.update(category);
        return cat;

    }

}