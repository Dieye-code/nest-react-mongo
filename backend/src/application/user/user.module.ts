import { Module } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repository/user.repository';
import { CreateUserCommandHandler } from './commands/createuser.command';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { FindUserQueryHandler } from './queries/fildusers.query';

@Module({
    imports: [RepositoryModule],
    providers: [CreateUserCommandHandler, FindUserQueryHandler],
    exports: [CreateUserCommandHandler, FindUserQueryHandler]
})
export class UserModule {}
