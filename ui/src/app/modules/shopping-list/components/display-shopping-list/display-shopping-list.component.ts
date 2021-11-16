import { Component, Input } from '@angular/core';
import { IShoppingList } from 'src/app/interfaces/ShoppingList';

@Component({
  selector: 'app-display-shopping-list',
  templateUrl: './display-shopping-list.component.html',
  styleUrls: ['./display-shopping-list.component.scss']
})
export class DisplayShoppingListComponent {
  @Input() public list!: IShoppingList

  
}
