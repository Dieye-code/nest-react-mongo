import { Module } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repository/user.repository';
import { CreateUserCommandHandler } from './commands/createuser.command';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { FindUserQueryHandler } from './queries/fildusers.query';
import { LoginCommandHandler } from './commands/login.command';

@Module({
    imports: [RepositoryModule],
    providers: [CreateUserCommandHandler, FindUserQueryHandler, LoginCommandHandler],
    exports: [CreateUserCommandHandler, FindUserQueryHandler, LoginCommandHandler]
})
export class UserModule {}
