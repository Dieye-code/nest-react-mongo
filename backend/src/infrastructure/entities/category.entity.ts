import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CategoryEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 150})
    libelle: string

    @CreateDateColumn({ name: 'createdate' })
    createdate: Date;
  
    @UpdateDateColumn({ name: 'updateddate' })
    updateddate: Date;
}