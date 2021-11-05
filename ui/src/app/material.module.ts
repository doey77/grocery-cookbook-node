import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatToolbarModule,
  MatIconModule
]

const imports = [...materialModules];
imports.push(CommonModule);

@NgModule({
  declarations: [],
  imports: imports,
  exports: materialModules
})
export class MaterialModule { }
