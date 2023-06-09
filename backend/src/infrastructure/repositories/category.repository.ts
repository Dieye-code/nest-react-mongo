import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { CategoryModel } from "src/domain/model/category";
import { CategoryRepositoryInterface } from "src/domain/repositories/categoryRepository.interface";
import { Category } from "../entities/category.entity";

@Injectable()
export class CategoryRepository implements CategoryRepositoryInterface {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>) {

    }

    async insert(category: CategoryModel): Promise<CategoryModel> {
        const categoryEntity = this.toCategoryEntity(category);
        const result = await this.categoryRepository.insert(categoryEntity);
        return this.toCategoryModel(result.generatedMaps[0] as Category);
    }


    async findAll(): Promise<CategoryModel[]> {
        const categoriesEntity = await this.categoryRepository.find();
        return categoriesEntity.map((categoryEntity) => this.toCategoryModel(categoryEntity));
    }


    async findById(id: number): Promise<CategoryModel> {

        const categoryEntity = await this.categoryRepository.findOneOrFail({where: {id : id}});
        return this.toCategoryModel(categoryEntity);
    }


    async update(id: number, libelle: string): Promise<void> {

        await this.categoryRepository.update({id : id},{libelle : libelle});
    }

    async delete(id: number): Promise<void> {
        await this.categoryRepository.delete({id: id});
    }

    private toCategoryEntity(category: CategoryModel): Category {
        const categoryEntity: Category = new Category();

        categoryEntity.id = category.id;
        categoryEntity.libelle = category.libelle;

        return categoryEntity;
    }

    private toCategoryModel(categoryEntity: Category): CategoryModel
    {
        const category: CategoryModel = new CategoryModel();

        category.id = categoryEntity.id;
        category.libelle = categoryEntity.libelle;
        category.createdate = categoryEntity.createdate;
        category.update = categoryEntity.updateddate;

        return category;
    }

}