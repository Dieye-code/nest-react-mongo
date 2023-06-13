import { Module } from '@nestjs/common';
import { GetCategoriesQuery } from './queries/category/getcategories.query';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { FindCategoryByIdQuery } from './queries/category/findCategory.query';
import { CreateCategoryCommandHandler } from './commands/category/createCategory.command';

@Module({
    imports: [RepositoryModule],
    providers: [GetCategoriesQuery, FindCategoryByIdQuery, CreateCategoryCommandHandler],
    exports: [GetCategoriesQuery,FindCategoryByIdQuery, CreateCategoryCommandHandler]
})
export class ApplicationModule {}
