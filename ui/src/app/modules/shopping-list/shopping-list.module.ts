import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './components/shopping-list.component';
import { SharedModule } from 'src/app/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { AddShoppingListComponent } from './components/add-shopping-list/add-shopping-list.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    AddShoppingListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListRoutingModule,
  ]
})
export class ShoppingListModule { }
