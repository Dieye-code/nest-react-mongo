import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../config/typeorm/typeorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryRepository } from './category.repository';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from './user.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TypeormConfigModule, TypeOrmModule.forFeature([CategoryEntity, UserEntity])
    ],
    providers: [CategoryRepository, UserRepository],
    exports: [CategoryRepository, UserRepository]
})
export class RepositoryModule {}
