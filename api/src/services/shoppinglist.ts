import { IShoppingListDB, IShoppingListItemDB } from '../interfaces/ShoppingList';

const get = () => {
    return {msg: 'shoppinglist'}
}

export type ShoppingListSyncArgs = {
    lists: IShoppingListDB[],
    items: IShoppingListItemDB[]
}

const sync = (args: ShoppingListSyncArgs) => {
    // TODO implement sync logic
    return args;
}

export const shoppingListService = {
    get: get,
    sync: sync
}