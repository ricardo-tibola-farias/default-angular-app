import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from './services/alert.service';
import { ToastService } from './services/toast.service';
import { AlertModule } from './components/alert/alert.module';
import { ToastModule } from './components/toast/toast.module';
import { GlobalService } from './services/global.service';

export function appInitializer(authService: AuthService): Promise<void>{
  return new Promise(async () => {
    await authService.initializeApp();
  })
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule,
    ToastModule
  ],
  providers: [
    AlertService,
    ToastService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
