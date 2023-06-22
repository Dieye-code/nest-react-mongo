import { Module } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repository/user.repository';
import { GetCategoriesQuery } from './queries/getcategories.query';
import { FindCategoryByIdQuery } from './queries/findCategory.query';
import { CreateCategoryCommandHandler } from './commands/createCategory.command';
import { UpdateCategoryCommandHandle } from './commands/updateCategory.command';
import { DeleteCategoryCommand } from './commands/deletecategory.command';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { EnvironmentConfigModule } from 'src/infrastructure/config/environment-config/environment-config.module';

@Module({
    imports: [RepositoryModule, EnvironmentConfigModule],
    providers: [GetCategoriesQuery, FindCategoryByIdQuery, CreateCategoryCommandHandler, UpdateCategoryCommandHandle, DeleteCategoryCommand],
    exports: [GetCategoriesQuery,FindCategoryByIdQuery, CreateCategoryCommandHandler,UpdateCategoryCommandHandle, DeleteCategoryCommand]
})
export class CategoryModule {}
