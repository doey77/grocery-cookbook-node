import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomepageComponent},
  {path: 'shoppinglist', loadChildren: () => import('./modules/shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)},
  {path: 'recipes', loadChildren: () => import('./modules/recipes/recipes.module').then(m=>m.RecipesModule)},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
