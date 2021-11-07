export interface IShoppingList {
    id?: number,
    name: string,
    entries: IShoppingListItem[],
}

export interface IShoppingListItem {
    id?: number,
    item: string,
    quantity: number,
}