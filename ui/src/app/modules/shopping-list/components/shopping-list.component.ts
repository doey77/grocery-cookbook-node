import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { IShoppingList, IShoppingListItem } from 'src/app/interfaces/ShoppingList';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public formListEntry: FormGroup = new FormGroup({
    item: new FormControl('', [Validators.required]),
    quantity: new FormControl(1, [Validators.required]),
  });

  public lists: IShoppingList[] = []
  public activeList!: IShoppingList;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.getLists();
  }

  public getLists() {
    this.lists = this.shoppingListService.getLists();
    if (this.lists.length === 0) {
      // Create a new default list
      this.lists = [{name: 'My List', entries: []}]
    };
    this.activeList = this.lists[0];
  }

  public onSelectListChange(value: IShoppingList) {
    this.activeList = value;
  }

  public onSubmitListEntry() {
    const entry: IShoppingListItem = {
      item: this.formListEntry.controls['item'].value,
      quantity: this.formListEntry.controls['quantity'].value
    };
    this.activeList.entries.push(entry);
  }
}