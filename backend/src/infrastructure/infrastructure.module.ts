import { DynamicModule, Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { RepositoryModule } from './repository/repository.module';

@Module({


  imports: [RepositoryModule]
})
export class InfrastructureModule {
    static forRoot(setting: any): DynamicModule {
        return {
            module: InfrastructureModule,
            controllers: [ProductController]
        };
    }
}
