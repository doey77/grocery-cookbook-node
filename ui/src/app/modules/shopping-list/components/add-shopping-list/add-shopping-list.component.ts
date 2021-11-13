import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-shopping-list',
  templateUrl: './add-shopping-list.component.html',
  styleUrls: ['./add-shopping-list.component.scss']
})
export class AddShoppingListComponent {

  public formNewList: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(public dialogRef: MatDialogRef<AddShoppingListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddListDialogData) { }

  onSubmitNewList() {
    const data: AddListDialogData = {
      name: this.formNewList.controls['name'].value
    };
    this.dialogRef.close(data);
  }
}

export interface AddListDialogData {
  name: string
};