import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListEntry } from '../models/ListEntry';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  public listEntry: FormGroup = new FormGroup({
    item: new FormControl('', [Validators.required]),
    quantity: new FormControl(1, [Validators.required]),
  });

  public listEntries: ListEntry[] = [];

  constructor() { }

  public onSubmitListEntry() {
    const entry: ListEntry = {
      item: this.listEntry.controls['item'].value,
      quantity: this.listEntry.controls['quantity'].value
    }
    this.listEntries.push(entry);
    console.log(this.listEntries);
  }
}