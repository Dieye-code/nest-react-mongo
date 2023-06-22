import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseConfig } from 'src/domaine/config/database.interface';
import { JWTConfig } from 'src/domaine/config/jwt.interface';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig, JWTConfig {

    constructor(private configService: ConfigService) { }

    getJwtSecret(): string {
        return this.configService.get<string>('JWT_SECRET');
    }
    getJwtExpirationTime(): string {
        return this.configService.get<string>('JWT_EXPIRATION_TIME');
    }
    getJwtRefreshSecret(): string {
        return this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET');
    }
    getJwtRefreshExpirationTime(): string {
        return this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME');
    }
    getDatabaseHost(): string {
        return this.configService.get<string>('DATABASE_HOST');
    }
    getDatabasePort(): number {
        return this.configService.get<number>('DATABASE_PORT');
    }
    getDatabaseUser(): string {
        return this.configService.get<string>('DATABASE_USER');
    }
    getDatabasePassword(): string {
        return this.configService.get<string>('DATABASE_PASSWORD');
    }
    getDatabaseName(): string {
        return this.configService.get<string>('DATABASE_NAME');
    }
    getDatabaseSync(): boolean {
        return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
    }
}
