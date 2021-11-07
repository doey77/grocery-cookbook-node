import { Dexie, Table } from 'dexie';
import { IShoppingListDB } from './ShoppingListDB';
import { IShoppingListItemDB } from './ShoppingListItemDB';

export class GroceryCookbookDB extends Dexie {
    public shoppingList: Table<IShoppingListDB, number>;
    public shoppingListItem: Table<IShoppingListItemDB, number>;
    
    constructor() {
        super('GroceryCookbookDB');
        this.version(1).stores({
            shoppingList: '++id, name',
            shoppingListItem: '++id, listId, item, quantity'
        });

        this.shoppingList = this.table('shoppingList');
        this.shoppingListItem = this.table('shoppingListItem');
    }
};

export var db = new GroceryCookbookDB();