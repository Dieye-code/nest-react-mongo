import { CategoryEntity } from "src/infrastructure/entities/category.entity";

export class Category {

    private id?: number

    private libelle: string

    private createdate: Date;

    private updateddate: Date;

    constructor(id: number, libelle: string, createddate?: Date, updatedate?: Date) {
        this.id = id;
        this.libelle = libelle;
        this.createdate = createddate;
        this.updateddate = updatedate;

    }

    public getId(): number{
        return this.id;
    }

    public getLibelle(): string{
        return this.libelle;
    }

    public getCreatedDate(): Date{
        return this.createdate
    }

    public getUpdatedDate(): Date{
        return this.updateddate;
    }


    public update(libelle: string) {
        this.libelle = libelle
    }

    public toEntity(): CategoryEntity {
        var category = new CategoryEntity();
        category.id = this.id;
        category.libelle = this.libelle;
        category.createdate = this.createdate;
        category.updateddate = this.updateddate;
        return category;
    }

    public static ToModel(categoryEntity: CategoryEntity): Category {
        return (new Category(categoryEntity.id, categoryEntity.libelle, categoryEntity.createdate, categoryEntity.updateddate));
    }

}