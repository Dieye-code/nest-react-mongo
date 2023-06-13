import {Injectable} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CategoryRepository {
    constructor (@InjectRepository(CategoryEntity) private categoryrepositoryEntity: Repository<CategoryEntity>){}


    async getAll(): Promise<CategoryEntity[]>{
        return  await this.categoryrepositoryEntity.find();
    }

}