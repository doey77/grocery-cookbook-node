import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { IShoppingList, IShoppingListItem } from 'src/app/interfaces/ShoppingList';
import { MatDialog } from '@angular/material/dialog';
import { AddListDialogData, AddShoppingListComponent } from './add-shopping-list/add-shopping-list.component';

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
  public saving = false;

  constructor(
    private shoppingListService: ShoppingListService,
    private addListDialog: MatDialog) { }

  ngOnInit() {
    this.getLists();
  }

  public async saveLists() {
    this.saving = true;
    await this.shoppingListService.saveLists(this.lists);
    await this.shoppingListService.getLists();
    this.saving = false;
  }

  public openAddList() {
    const dialogRef = this.addListDialog.open(AddShoppingListComponent);

    dialogRef.afterClosed().subscribe(result => {
      let data: AddListDialogData;
      if (result) {
        data = result;
        this.lists.push({name: data.name, entries:[]})
      }
    });
  }

  public async getLists() {
    this.lists = await this.shoppingListService.getLists();
    if (this.lists.length === 0) {
      // Create a new default list
      this.lists = [{id: 1, name: 'My List', entries: []}]
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