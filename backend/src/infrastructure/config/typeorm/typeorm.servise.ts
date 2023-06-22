import {Injectable} from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {

    constructor(private config: EnvironmentConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.config.getDatabaseHost(),
            port: this.config.getDatabasePort(),
            username: this.config.getDatabaseUser(),
            password: this.config.getDatabasePassword(),
            database: this.config.getDatabaseName(),
            entities: [__dirname+'./../../**/*.entity{.ts,.js}'],
            synchronize: this.config.getDatabaseSync()
        }
    }

}