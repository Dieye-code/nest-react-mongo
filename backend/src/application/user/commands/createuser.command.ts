import {Injectable} from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/domaine/models/User';
import { Role } from 'src/infrastructure/entities/role.enum';
import { UserRepository } from 'src/infrastructure/repository/user.repository';


export class CreateUserCommand{
    
    @ApiProperty()
    firstName: string

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    userName: string

    @ApiProperty({minLength: 6, maxLength: 12})
    password: string

    @ApiProperty({type: "enum", enum: Role})
    role: Role
}

@Injectable()
export class CreateUserCommandHandler{
    constructor(private userRepository: UserRepository){}

    public async handle(command: CreateUserCommand): Promise<User>{

        var user= new User(null, command.firstName, command.lastName, command.userName, command.role)
        user.setPassword(command.password);    
        return await this.userRepository.create(user);

    }
}