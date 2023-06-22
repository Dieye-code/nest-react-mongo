import { DynamicModule, Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { RepositoryModule } from './repository/repository.module';
import { ApplicationModule } from 'src/application/application.module';
import { UserController } from './controllers/user/user.controller';
import { UserModule } from 'src/application/user/user.module';
import { CategoryModule } from 'src/application/category/category.module';
import { EnvironmentConfigModule } from './config/environment-config/environment-config.module';
import { CategoryController } from './controllers/category/category.controller';

@Module({

  controllers: [UserController, CategoryController],

  imports: [EnvironmentConfigModule]
})
export class InfrastructureModule {
    static forRoot(setting: any): DynamicModule {
        return {
            module: InfrastructureModule,
            imports: [ApplicationModule, RepositoryModule, UserModule, CategoryModule],
            controllers: [ProductController, UserController]
        };
    }
}
