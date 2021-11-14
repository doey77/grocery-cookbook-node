import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './components/recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecipesRoutingModule,
  ]
})
export class RecipesModule { }
