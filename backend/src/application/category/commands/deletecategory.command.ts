import { Injectable } from '@nestjs/common'
import { Category } from 'src/domaine/models/Category';
import { CategoryEntity } from 'src/infrastructure/entities/category.entity';
import { CategoryRepository } from 'src/infrastructure/repository/category.repository';


@Injectable()
export class DeleteCategoryCommand {
    constructor(private categoryRepository: CategoryRepository) { }

    public async handle(id: number): Promise<Category>{
        return await this.categoryRepository.delete(id);
    }

}