import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmModuleOptions =() : TypeOrmModuleOptions => ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'crudnest',
    entities: [__dirname+'./../../**/*.entity{.ts,.js}'],
    synchronize: true
} as TypeOrmModuleOptions)


@Module({
    imports: [TypeOrmModule.forRootAsync({useFactory: getTypeOrmModuleOptions})]
})
export class TypeormConfigModule {}
