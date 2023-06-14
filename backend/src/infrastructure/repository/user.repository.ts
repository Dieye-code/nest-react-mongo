import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

    public async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    public async findById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOneBy({ id: id });
    }

    public async create(user: UserEntity): Promise<UserEntity>{
        return await this.userRepository.create(user);
    }

    public async update(user: UserEntity): Promise<UserEntity>{

        var userUpdate = await this.userRepository.findOneBy({id: user.id})

        return null;

    }


}