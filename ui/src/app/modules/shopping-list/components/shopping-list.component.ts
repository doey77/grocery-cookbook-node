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
    this.initGetLists();
  }

  public async sync() {
    const rsp = await this.shoppingListService.sync();
    rsp.subscribe({
      next: (value) => {
        console.log(value);
      }
    })
  }

  public async openAddList() {
    const dialogRef = this.addListDialog.open(AddShoppingListComponent);

    dialogRef.afterClosed().subscribe(async result => {
      let data: AddListDialogData;
      if (result) {
        data = result;
        await this.addList(data.name);
      }
    });
  }

  private async addList(name: string) {
    const listId = await this.shoppingListService.addList(name);
    await this.getLists(listId);
  }

  public async initGetLists() {
    await this.getLists();
    if (this.lists.length === 0) {
      // Create a new default list
      await this.shoppingListService.addList('My List');
      await this.getLists();
    };
  }

  public async getLists(activeListId?: number) {
    this.lists = await this.shoppingListService.getLists();
    if (activeListId) {
      for (let index = 0; index < this.lists.length; index++) {
        const list = this.lists[index];
        if (list.id === activeListId) {
          this.activeList = list;
        }
      }
    } else {
      if (this.lists.length > 0) {
        this.activeList = this.lists[0];
      }
    }
  }

  public onSelectListChange(value: IShoppingList) {
    this.activeList = value;
  }

  public onSubmitListEntry() {
    const entry: IShoppingListItem = {
      item: this.formListEntry.controls['item'].value,
      quantity: this.formListEntry.controls['quantity'].value
    };
    let itemExists = false;
    for (let index = 0; index < this.activeList.entries.length; index++) {
      const element = this.activeList.entries[index];
      if (element.item === entry.item) {
        itemExists = true;
        break;
      }      
    }
    if (itemExists) {
      const msg = `${entry.item} is already in the list`;
      alert(msg) // TODO use toast
    } else {
      this.shoppingListService.addListItem(entry, this.activeList.id!);
      this.getLists(this.activeList.id);  
    }
  }
}