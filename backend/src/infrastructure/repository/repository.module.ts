import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../config/typeorm/typeorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeormConfigModule, TypeOrmModule.forFeature()
    ]
})
export class RepositoryModule {}
