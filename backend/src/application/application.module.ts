import { Module } from '@nestjs/common';
import { GetCategoriesQuery } from './queries/category/getcategories.query';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { FindCategoryByIdQuery } from './queries/category/findCategory.query';

@Module({
    imports: [RepositoryModule],
    providers: [GetCategoriesQuery, FindCategoryByIdQuery],
    exports: [GetCategoriesQuery,FindCategoryByIdQuery]
})
export class ApplicationModule {}
