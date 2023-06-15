import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/domaine/models/User";
import { UserRepository } from "src/infrastructure/repository/user.repository";

export class LoginCommand {

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}


@Injectable()
export class LoginCommandHandler {

    constructor(private userRepository: UserRepository) { }


    public async handle(command: LoginCommand): Promise<User> {

        var user = await this.userRepository.findByUsername(command.username);
        if (user == null)
            return null;
        else {
            var userModel = User.toModel(user);
            userModel.setPasswordHash(user.password)            
            if(!userModel.isMatch(command.password))
                return null;
        }
        return User.toModel(user);
    }

}