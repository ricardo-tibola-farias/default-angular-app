import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class AlertModule { }
