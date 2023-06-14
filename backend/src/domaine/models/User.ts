import { Role } from "src/infrastructure/entities/role.enum";
import * as bcrypt from 'bcrypt'
import { UserEntity } from "src/infrastructure/entities/user.entity";

export class User {

    private id: number;
    private firstName: string;
    private lastName: string;
    private userName: string;
    private password: string;
    private role: Role;
    private createddate: Date;
    private updateddate: Date;

    constructor(id: number, firstName: string, lastName: string, userName: string, role: Role, createddate?: Date, updateddate?: Date) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.role = role
        this.createddate = createddate;
        this.updateddate = updateddate;
    }

    public update(firstName: string, lastName: string, userName: string, role: Role, createddate?: Date, updateddate?: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.role = role
        this.createddate = createddate;
        this.updateddate = updateddate;
    }

    public async setPassword(password: string) {
        this.password = await bcrypt.hashSync(password, 10);
    }

    public setPasswordHash(password: string){
        this.password = password
    }

    public async isMatch(password: string): Promise<boolean>{
        return await bcrypt.compareSync(password, this.password);
    }

    public getId(): number{
        return this.id;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getUserName(): string {
        return this.userName;
    }

    public getRole(): Role {
        return this.role;
    }

    public getCreatedDate(): Date {
        return this.createddate;
    }

    public getUpdatedDate(): Date {
        return this.updateddate;
    }

    public toEntity(): UserEntity {
        var user = new UserEntity();
        user.id = this.id;
        user.firstname = this.firstName;
        user.lastname = this.lastName;
        user.username = this.userName;
        user.role = this.role;
        return user;
    }

    public static toModel(user: UserEntity): User {
        return (new User(user.id, user.firstname, user.lastname, user.username, user.role, user.createdate, user.updateddate));
    }

}