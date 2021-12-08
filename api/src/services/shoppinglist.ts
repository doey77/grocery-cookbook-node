import { getManager } from 'typeorm';
import { ShoppingListDB, ShoppingListItemDB } from '../db/models/ShoppingList';
import { IShoppingListDB, IShoppingListItemDB } from '../interfaces/ShoppingList';

const get = () => {
    const listRepo = getManager().getRepository(ShoppingListDB);
    return listRepo.find({relations: ['items']});
}

export type ShoppingListSyncArgs = {
    lists: Pick<IShoppingListDB, "id" | "name">,
    items: Pick<IShoppingListItemDB, "id" | "item" | "listId" | "quantity">
}

const sync = async (args: ShoppingListSyncArgs) => {
    const listRepo = getManager().getRepository(ShoppingListDB);
    const listItemRepo = getManager().getRepository(ShoppingListItemDB);

    return args;
}

const init = async () => {
    const listRepo = getManager().getRepository(ShoppingListDB);
    const listItemRepo = getManager().getRepository(ShoppingListItemDB);

    const newList = await listRepo.save(new ShoppingListDB("My List"));

    listItemRepo.save(new ShoppingListItemDB("cheese", newList));

    return listRepo.findOne(newList.id);
}

export const shoppingListService = {
    get: get,
    sync: sync,
    init: init,
}