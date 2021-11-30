import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserDB {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(email:string, password:string) {
        this.email=email; this.password=password;
    }
}