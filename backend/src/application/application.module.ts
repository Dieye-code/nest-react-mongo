import { Module } from '@nestjs/common';
import { GetCategoriesQuery } from './queries/category/getcategories.query';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { FindCategoryByIdQuery } from './queries/category/findCategory.query';
import { CreateCategoryCommandHandler } from './commands/category/createCategory.command';
import { UpdateCategoryCommandHandle } from './commands/category/updateCategory.command';

@Module({
    imports: [RepositoryModule],
    providers: [GetCategoriesQuery, FindCategoryByIdQuery, CreateCategoryCommandHandler, UpdateCategoryCommandHandle],
    exports: [GetCategoriesQuery,FindCategoryByIdQuery, CreateCategoryCommandHandler,UpdateCategoryCommandHandle]
})
export class ApplicationModule {}
