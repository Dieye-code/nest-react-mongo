import { Module } from '@nestjs/common';
import { GetCategories } from './queries/category/getcategories.query';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';

@Module({
    imports: [RepositoryModule],
    providers: [GetCategories],
    exports: [GetCategories]
})
export class ApplicationModule {}
