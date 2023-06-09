import { Category } from "src/infrastructure/entities/category.entity";
import { CategoryModel } from "../model/category";

export interface CategoryRepositoryInterface{
    insert(category: CategoryModel): Promise<CategoryModel>;
    findAll(): Promise<CategoryModel[]>;
    findById(id: number): Promise<CategoryModel>;
    update(id: number, libelle: string): Promise<void>;
    delete(id: number): Promise<void>;
}