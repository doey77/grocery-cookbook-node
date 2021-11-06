import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './components/shopping-list.component';
import { SharedModule } from 'src/app/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListRoutingModule,
  ]
})
export class ShoppingListModule { }
