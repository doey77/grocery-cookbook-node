import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
]

const imports = [...materialModules];
imports.push(CommonModule);

@NgModule({
  declarations: [],
  imports: imports,
  exports: materialModules
})
export class MaterialModule { }
