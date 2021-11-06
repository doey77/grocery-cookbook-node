import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { MaterialModule } from 'src/app/material.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';


@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShoppingListRoutingModule,
  ]
})
export class ShoppingListModule { }
