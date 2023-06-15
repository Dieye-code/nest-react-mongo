import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { User } from "src/domaine/models/User";

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

    public async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    public async findById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOneBy({ id: id });
    }

    public async findByUsername(username: string){
        return await this.userRepository.findOneBy({username : username})
    }

    public async create(user: User): Promise<User> {
        var u = await this.userRepository.save(user.toEntity());
        return User.toModel(u);
    }

    public async update(user: User): Promise<User> {

        var userUpdate = await this.userRepository.findOneBy({ id: user.getId() })
        if (userUpdate != null) {
            var u = User.toModel(userUpdate);
            u.update(user.getFirstName(), user.getLastName(), user.getUserName(), user.getRole())
            userUpdate = await this.userRepository.save(u.toEntity());
            return User.toModel(userUpdate);
        }
        return null;

    }

    public async auth(username: string, password: string): Promise<User> {

        var user = await this.userRepository.findOneBy({ username: username });
        if (user != null) {
            var userModel = User.toModel(user)
            userModel.setPasswordHash(user.password);
            if (await userModel.isMatch(password))
                return userModel;
            return null;
        }
        return null;
    }




}