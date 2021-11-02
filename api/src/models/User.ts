import { Schema } from "express-validator";
import { UserDB } from "../db/UserDB";

export class User {
    public name: string;
    public password: string;
    public email: string;

    constructor(name:string, password:string, email:string) {
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public dbCreate = async (): Promise<void> => {
        await UserDB.create({name: this.name, password: this.password, email: this.email})
    };

    public static validator = (): Schema => ({
        name: {
            in: ['body'],
            isString: true
        },
        password: {
            in: ['body'],
            isString: true
        },
        email: {
            in: ['body'],
            isString: true,
            optional: true
        }
    });
};