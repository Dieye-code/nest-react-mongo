import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeOrmService } from './typeorm.servise';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';



@Module({
    imports: [TypeOrmModule.forRootAsync({imports:[EnvironmentConfigModule], useClass: TypeOrmService, inject: [TypeOrmService]})]
})
export class TypeormConfigModule {}
