import {ConfigModule} from '@nestjs/config'
import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';
import {validate} from './environment-config.validation'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './env/local.env',
      ignoreEnvFile: process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test' ? false : true,
      validate: validate
    })
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService]
})
export class EnvironmentConfigModule {}
