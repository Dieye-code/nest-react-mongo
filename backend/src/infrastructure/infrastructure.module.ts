import { DynamicModule, Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { RepositoryModule } from './repository/repository.module';
import { ApplicationModule } from 'src/application/application.module';

@Module({
})
export class InfrastructureModule {
    static forRoot(setting: any): DynamicModule {
        return {
            module: InfrastructureModule,
            imports: [ApplicationModule, RepositoryModule],
            controllers: [ProductController]
        };
    }
}
