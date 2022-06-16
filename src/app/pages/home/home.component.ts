import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _toasts =
    {
      'error': () => this._toastService.showError('Test message error'),
      'success': () => this._toastService.showSuccess('Success message test'),
      'info': () => this._toastService.showInfo('Info message test')
    }
  ;

  private _alerts =
  {
    'error': () => this._alertService.showError('Title', 'Test message error'),
    'success': () => this._alertService.showConfirmation('Title', 'Success message test', 'Ok','Cancel'),
    'info': () => this._alertService.showAlert('Title', 'Info message test')
  }
;

  constructor(
    private _toastService: ToastService,
    private _alertService: AlertService) { }

  ngOnInit(): void {
  }

  public showToast(type: string): void { 
    const toastToShow = this._toasts[type];
    toastToShow();
  }

  public showAlert(type: string): void {
    const alertsToShow = this._alerts[type];
    alertsToShow();
  }


}
