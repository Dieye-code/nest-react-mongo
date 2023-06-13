import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from './infrastructure/infrastructure.module';


@Module({})
export default class AppModule {
  static forRoot(setting: any): DynamicModule{
    return {
      module: AppModule,
      imports: [
      InfrastructureModule.forRoot(setting)
      ]
    };
  }
}
