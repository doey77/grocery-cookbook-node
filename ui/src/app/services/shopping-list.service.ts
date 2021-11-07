import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { db } from '../models/db'
import { IShoppingList, IShoppingListItem } from '../interfaces/ShoppingList';
import { IShoppingListDB } from '../models/ShoppingListDB';
import { IShoppingListItemDB } from '../models/ShoppingListItemDB';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  public async saveLists(lists: IShoppingList[]): Promise<void> {
    for (let listI = 0; listI < lists.length; listI++) {
      const list = lists[listI];
      const listDb: IShoppingListDB = {id: list.id, name: list.name};
      await db.shoppingList.put(listDb);
      for (let ItemI = 0; ItemI < list.entries.length; ItemI++) {
        const item = list.entries[ItemI];
        const itemDb: IShoppingListItemDB = {
          id:item.id, listId: listI,
          item: item.item, quantity: item.quantity
        };
        await db.shoppingListItem.put(itemDb);
      }
    }
  }

  public async getLists(): Promise<IShoppingList[]> {
    const lists: IShoppingList[] = [];
    const listsDb = await db.shoppingList.toArray();
    const itemsDb = await db.shoppingListItem.bulkGet(listsDb.map(list=>list.id!))

    for (let index = 0; index < listsDb.length; index++) {
      const element = listsDb[index];
      const list: IShoppingList = {
        name: element.name,
        entries: itemsDb.map(itemDb => {
          const item: IShoppingListItem = {
            item: itemDb!.item,
            quantity: itemDb!.quantity
          }
          return item
        })
      };
      lists.push(list);
    }

    return lists;
  }
}
