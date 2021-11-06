import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListEntry } from '../models/ListEntry';
import { List } from '../models/List';

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

  public lists: List[] = []
  public activeList!: List;

  constructor() { }

  ngOnInit() {
    // TODO get lists from storage
    this.lists.push({name: 'My List', entries:[]});
    this.lists.push({name: 'Another List', entries:[]});
    this.activeList = this.lists[0];
  }

  public onSelectListChange(value: List) {
    this.activeList = value;
  }

  public onSubmitListEntry() {
    const entry: ListEntry = {
      item: this.formListEntry.controls['item'].value,
      quantity: this.formListEntry.controls['quantity'].value
    };
    this.activeList.entries.push(entry);
  }
}