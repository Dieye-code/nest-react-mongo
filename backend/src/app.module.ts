import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';


@Module({
  imports: [ApplicationModule]
})
export default class AppModule {
  static forRoot(setting: any): DynamicModule{
    return {
      module: AppModule,
      imports: [
        ApplicationModule,
      InfrastructureModule.forRoot(setting)
      ]
    };
  }
}
