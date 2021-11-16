import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { IShoppingListItem } from 'src/app/interfaces/ShoppingList';

@Component({
  selector: 'app-display-shopping-list',
  templateUrl: './display-shopping-list.component.html',
  styleUrls: ['./display-shopping-list.component.scss']
})
export class DisplayShoppingListComponent {

  private _items = new BehaviorSubject<IShoppingListItem[]>([]);
  @Input()
  public set items(value: IShoppingListItem[]) { this._items.next(value) }
  public get items() { return this._items.getValue()}

  public displayedColumns = ['item', 'quantity', 'edit']

  public dataSource = new MatTableDataSource<IShoppingListItem>(this.items);
}
