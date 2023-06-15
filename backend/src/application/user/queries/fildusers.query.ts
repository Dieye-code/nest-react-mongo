import {Injectable} from '@nestjs/common'
import { User } from "src/domaine/models/User";
import { UserRepository } from "src/infrastructure/repository/user.repository";

@Injectable()
export class FindUserQueryHandler {
    constructor(private userRepository: UserRepository) { }

    public async handle(): Promise<User[]> {
            var users = await this.userRepository.findAll();
            return users.map(user => User.toModel(user));
    }
}