import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/domaine/models/Category';


@Injectable()
export class CategoryRepository {
    constructor(@InjectRepository(CategoryEntity) private categoryrepositoryEntity: Repository<CategoryEntity>) { }

    public async getAll(): Promise<Category[]> {
        var categories = await this.categoryrepositoryEntity.find();
        return categories.map(c => Category.ToModel(c));
    }

    public async get(id: number): Promise<Category> {

        var category =  await this.categoryrepositoryEntity.findOneBy({ id: id });
        return category == null ? null : Category.ToModel(category);
    }

    public async create(category: Category): Promise<Category> {

        var categoryEntity = category.toEntity();
        const result = await this.categoryrepositoryEntity.save(categoryEntity);
        return Category.ToModel(result);
    }

    public async update(category: Category): Promise<Category> {
        var c = await this.categoryrepositoryEntity.findOneBy({ id: category.getId() });
        if (c != null) {
            c.libelle = category.getLibelle();
            await this.categoryrepositoryEntity.save(c);
            return Category.ToModel(c);
        }
        return null;
    }

    public async delete(id: number): Promise<Category> {
        var category = await this.categoryrepositoryEntity.findOneBy({ id: id });
        if (category != null){
            await this.categoryrepositoryEntity.remove(category);
            return Category.ToModel(category);
        }
        return null;
    }

}