import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./role.enum";

@Entity()
export class UserEntity{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('varchar', {length: 150})
    firstname: string;
    
    @Column('varchar', {length: 150})
    lastname: string;
    
    @Column('varchar', {length: 150, unique: true})
    username: string;
    
    @Column('varchar', {length: 100})
    password: string;

    @Column('int')
    role: Role

    @CreateDateColumn({ name: 'createdate' })
    createdate: Date;
  
    @UpdateDateColumn({ name: 'updateddate' })
    updateddate: Date;

}