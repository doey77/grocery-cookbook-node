import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { db } from '../models/db'
import { IShoppingList, IShoppingListItem } from '../interfaces/ShoppingList';
import { IShoppingListDB } from '../models/ShoppingListDB';
import { IShoppingListItemDB } from '../models/ShoppingListItemDB';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private get apiUrl() {return environment.apiUrl}

  constructor(private http: HttpClient) { }

  /**
   * Syncs the IndexedDB's lists to the server
   */
  public async sync() {
    const listsDb = await db.shoppingList.toArray();
    const itemsDb = await db.shoppingListItem.toArray();

    const data = {
      lists: listsDb,
      items: itemsDb,
    };

    // TODO refine when actually implemented
    return this.http.post<null>(
      `${this.apiUrl}shoppinglist/sync`,
      data,
      
    )
  }

  public async addListItem(item: IShoppingListItem, listId: number) {
    const itemDb: IShoppingListItemDB = {
      listId: listId,
      item: item.item,
      quantity: item.quantity
    };
    return await db.shoppingListItem.add(itemDb);
  }

  public async addList(listName: string) {
    const listDb: IShoppingListDB = {
      name: listName
    };
    return await db.shoppingList.add(listDb);
  }

  public async getLists(): Promise<IShoppingList[]> {
    const listsDb = await db.shoppingList.toArray();
    const itemsDb = await db.shoppingListItem.toArray();

    const lists: IShoppingList[] = listsDb.map((listDb) => {return {
      id: listDb.id,
      name: listDb.name,
      entries: []
    }});

    itemsDb.forEach((itemDb) => {
      const item: IShoppingListItem = {
        id: itemDb.id,
        item: itemDb.item,
        quantity: itemDb.quantity
      }

      for (let index = 0; index < lists.length; index++) {
        const list = lists[index];
        if (itemDb.listId === list.id) {
          list.entries.push(item);
        }
      }
    })

    return lists;
  }
}
