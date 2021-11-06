export interface IShoppingList {
    name: string,
    entries: IShoppingListItem[],
}

export interface IShoppingListItem {
    item: string,
    quantity: number,
}