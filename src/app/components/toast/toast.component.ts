import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA)
  public data: {
    message: string,
    action: string,
    icon: string,
    onActionClick: () => void,
    messageType: 'info' | 'error' | 'success'
  },
    public snackBar: MatSnackBar) { }

  public dismiss(): void {
    this.snackBar.dismiss();
  }

}
