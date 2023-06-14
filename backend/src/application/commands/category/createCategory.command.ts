import {Injectable} from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/domaine/models/Category';
import { CategoryEntity } from "src/infrastructure/entities/category.entity";
import { CategoryRepository } from "src/infrastructure/repository/category.repository";

export class CreateCategoryCommand {
    @ApiProperty()
    libelle: string;
}

@Injectable()
export class CreateCategoryCommandHandler{

    constructor(private categoryRepository: CategoryRepository){}
    
    public async handle(command: CreateCategoryCommand): Promise<Category>{
        var category = new Category(null, command.libelle);
        return await this.categoryRepository.create(category);
    }
}