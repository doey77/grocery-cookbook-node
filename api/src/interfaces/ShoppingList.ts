export interface IShoppingListDB {
    id?: number,
    name: string
}

export interface IShoppingListItemDB {
    id?: number,
    listId: number,
    item: string,
    quantity: number,
}