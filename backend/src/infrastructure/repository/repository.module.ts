import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../config/typeorm/typeorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryRepository } from './category.repository';

@Module({
    imports: [
        TypeormConfigModule, TypeOrmModule.forFeature([CategoryEntity])
    ],
    providers: [CategoryRepository],
    exports: [CategoryRepository]
})
export class RepositoryModule {}
