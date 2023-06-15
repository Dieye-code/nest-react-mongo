import { BadRequestException, Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserCommand, CreateUserCommandHandler } from 'src/application/user/commands/createuser.command';
import { FindUserQueryHandler } from 'src/application/user/queries/fildusers.query';

@Controller('users')
export class UserController {

    constructor(
        private createUser: CreateUserCommandHandler,
        private findUserQuery: FindUserQueryHandler
    ) { }

    @Get()
    public async findAll(@Res() request) :Promise<any> {
        var users = await this.findUserQuery.handle();
        return request.status(HttpStatus.OK).json(users);
    }



    @Post()
    public async create(@Res() request, @Body() command: CreateUserCommand): Promise<any> {
        var user = await this.createUser.handle(command);
        if (user == null)
            return new BadRequestException("User not created");

        return request.status(HttpStatus.CREATED).json(user);
    }

}
