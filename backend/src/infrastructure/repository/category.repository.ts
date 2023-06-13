import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CategoryRepository {
    constructor(@InjectRepository(CategoryEntity) private categoryrepositoryEntity: Repository<CategoryEntity>) { }

    public async getAll(): Promise<CategoryEntity[]> {
        return await this.categoryrepositoryEntity.find();
    }

    public async get(id: number): Promise<CategoryEntity> {

        return await this.categoryrepositoryEntity.findOneBy({ id: id });
    }

    public async create(category: CategoryEntity): Promise<CategoryEntity> {

        const result = await this.categoryrepositoryEntity.save(category);
        return result;
    }

    public async update(category: CategoryEntity): Promise<void> {
        var c = await this.categoryrepositoryEntity.findOneBy({ id: category.id });
        if (c != null) {
            c.libelle = category.libelle;
            await this.categoryrepositoryEntity.save(c);
        }
    }

    public async delete(id: number): Promise<void> {
        var category = await this.categoryrepositoryEntity.findOneBy({ id: id });
        if (category != null)
            this.categoryrepositoryEntity.remove(category);
    }

}