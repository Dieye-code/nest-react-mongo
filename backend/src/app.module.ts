import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ApplicationModule, EnvironmentConfigModule, JwtModule.register({
    secret: process.env.secret
  })]
})
export default class AppModule {
  static forRoot(setting: any): DynamicModule{
    return {
      module: AppModule,
      imports: [
        ConfigModule.forRoot({
          envFilePath: './env/local.env',
          isGlobal: true
        }),
        ApplicationModule,
      InfrastructureModule.forRoot(setting)
      ]
    };
  }
}
