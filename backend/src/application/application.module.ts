import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';

@Module({
    imports: [ RepositoryModule,UserModule, CategoryModule]
})
export class ApplicationModule {}
