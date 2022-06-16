import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ToastComponent
  ],
  exports: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ]
})
export class ToastModule { }
