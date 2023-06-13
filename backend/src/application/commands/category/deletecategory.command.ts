import { Injectable } from '@nestjs/common'
import { CategoryEntity } from 'src/infrastructure/entities/category.entity';
import { CategoryRepository } from 'src/infrastructure/repository/category.repository';


@Injectable()
export class DeleteCategoryCommand {
    constructor(private categoryRepository: CategoryRepository) { }

    public async handle(id: number): Promise<CategoryEntity>{
        return await this.categoryRepository.delete(id);
    }

}