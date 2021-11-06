import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
]

const sharedModules = [
  FormsModule,
  ReactiveFormsModule
]

const modules = [...materialModules].concat(...sharedModules)

const imports = [...modules];
imports.push(CommonModule);

@NgModule({
  declarations: [],
  imports: imports,
  exports: modules
})
export class SharedModule { }
