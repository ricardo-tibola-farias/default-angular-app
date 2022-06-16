import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { AlertComponent } from '../components/alert/alert.component';
import { AlertData } from '../components/alert/models/alert-data';
import { GlobalService } from './global.service';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    public isMobile: boolean;

    constructor(
        private _dialog: MatDialog,
        private _globalService: GlobalService) {

        this.isMobile = this._globalService.isMobile;
        this._globalService.onIsMobileChange.subscribe(isMobile => this.isMobile = isMobile);

    }

    public showError(title: string, message: string, maxWidth: string = '30%'): Promise<void> {

        maxWidth = this.isMobile ? '90%' : maxWidth;

        const openedDialog = this._dialog.open(AlertComponent, {
            data: {
                title,
                message,
                type: 'error',
                neutralAction: 'OK'
            } as AlertData,
            maxWidth
        });

        return openedDialog.afterClosed()
            .toPromise<void>();
    }

    public showConfirmation(title: string, message: string, positiveLabel: string, negativeLabel: string, maxWidth: string = '30%'): Promise<boolean> {

        maxWidth = this.isMobile ? '90%' : maxWidth;

        const openedDialog = this._dialog.open(AlertComponent, {
            data: {
                title,
                message,
                type: 'confirmation',
                negativeAction: negativeLabel,
                positiveAction: positiveLabel
            } as AlertData,
            maxWidth,
            disableClose: true
        });

        return openedDialog.afterClosed()
            .pipe(map(r => r || false))
            .toPromise<boolean>();
    }

    public showAlert(title: string, message: string, maxWidth: string = '30%'): Promise<void> {

        maxWidth = this.isMobile ? '90%' : maxWidth;

        const openedDialog = this._dialog.open(AlertComponent, {
            data: {
                title,
                message,
                type: 'alert',
                neutralAction: 'OK'
            } as AlertData,
            maxWidth
        });

        return openedDialog.afterClosed()
            .toPromise<void>();
    }

    public close(): Promise<void> {
        this._dialog.closeAll();
        return this._dialog.afterAllClosed.toPromise();
    }
}