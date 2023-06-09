import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'


@Entity()
export class Category {
    @PrimaryGeneratedColumn({ type: 'integer' })
    id: number

    @Column('varchar', { length: 255, nullable: false })
    libelle: string

    @CreateDateColumn({ name: 'createdate' })
    createdate: Date;

    @UpdateDateColumn({ name: 'updateddate' })
    updateddate: Date;
}