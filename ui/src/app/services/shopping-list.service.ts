import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IShoppingList } from '../interfaces/ShoppingList';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  public getLists(): IShoppingList[] {
    // TODO get from storage
    return [
      {name: 'My List', entries: []},
      {name: 'A Filled Out List', entries: 
        [
          {item: 'Cheese', quantity: 5},
          {item: 'Bread', quantity: 2},
          {item: 'Beef', quantity: 1},
        ]
      }
    ]
  }
}
