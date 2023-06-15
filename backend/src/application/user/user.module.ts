import { Module } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repository/user.repository';
import { CreateUserCommandHandler } from './commands/createuser.command';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';

@Module({
    imports: [RepositoryModule],
    providers: [CreateUserCommandHandler],
    exports: [CreateUserCommandHandler]
})
export class UserModule {}
