import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

interface IShoppingListItemDB {
    id?: number,
    name: string,
    shoppingList: IShoppingListDB
}

interface IShoppingListDB {
    id?: number,
    name: string,
    items?: IShoppingListItemDB[]
}

@Entity()
export class ShoppingListItemDB implements IShoppingListItemDB {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @ManyToOne('ShoppingListDB', 'items')
    shoppingList;

    constructor(name:string, shoppingList: IShoppingListDB) {
        this.name=name; this.shoppingList=shoppingList;
    }
}

@Entity()
export class ShoppingListDB implements IShoppingListDB {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @OneToMany('ShoppingListItemDB', 'shoppingList', {eager:true})
    items?: IShoppingListItemDB[];

    constructor(name:string) {
        this.name=name; 
    }
}