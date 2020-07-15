import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Importing used Angular Material Components */
import {
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatSnackBarModule
} from "@angular/material";

const modules = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatSnackBarModule
];


@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }
