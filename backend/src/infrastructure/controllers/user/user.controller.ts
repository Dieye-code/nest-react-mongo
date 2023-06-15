import { BadRequestException, Body, Controller, Get, HttpStatus, Post, Res, UnauthorizedException } from '@nestjs/common';
import { CreateUserCommand, CreateUserCommandHandler } from 'src/application/user/commands/createuser.command';
import { LoginCommand, LoginCommandHandler } from 'src/application/user/commands/login.command';
import { FindUserQueryHandler } from 'src/application/user/queries/fildusers.query';

@Controller('users')
export class UserController {

    constructor(
        private createUser: CreateUserCommandHandler,
        private findUserQuery: FindUserQueryHandler,
        private loginCommand : LoginCommandHandler
    ) { }

    @Get()
    public async findAll(@Res() request): Promise<any> {
        var users = await this.findUserQuery.handle();
        return request.status(HttpStatus.OK).json(users);
    }


    @Post("login")
    public async login(@Res() request, @Body() command: LoginCommand): Promise<any>{

        var user = await this.loginCommand.handle(command);
        
        if(user == null){
            throw new UnauthorizedException("username or password incorrect")
        }
        
        return request.status(HttpStatus.OK).json(user);

    }


    @Post()
    public async create(@Res() request, @Body() command: CreateUserCommand): Promise<any> {
        var user = await this.createUser.handle(command);
        if (user == null)
            return new BadRequestException("User not created");

        return request.status(HttpStatus.CREATED).json(user);
    }

}
