import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from '../components/toast/toast.component';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    private _ACTION = 'OK';
    private _TIME = 3500;
    private _TIME_ERROR = 6000;

    constructor(public snackBar: MatSnackBar) { }

    public showInfo(message: string, action: string = this._ACTION, time: number = this._TIME): void {
        this.snackBar.openFromComponent(ToastComponent, {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: time,
            panelClass: 'snackbar',
            data: {
                message,
                action,
                icon: 'info',
                messageType: 'info'
            }
        });
    }

    public showSuccess(message: string, action: string = this._ACTION, time: number = this._TIME): void {
        this.snackBar.openFromComponent(ToastComponent, {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: time,
            panelClass: 'snackbar',
            data: {
                message,
                action,
                icon: 'check_circle',
                messageType: 'success'
            }
        });
    }

    public showError(message: string | { message: string, invalidField?: string }, action: string = this._ACTION, time: number = this._TIME_ERROR, onActionClick?: () => void): void {
        message = (message as { message: string })?.message || message;

        this.snackBar.openFromComponent(ToastComponent, {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: time,
            panelClass: 'snackbar',
            data: {
                message,
                action,
                onActionClick,
                icon: 'report_problem',
                messageType: 'error'
            }
        });
    }
}