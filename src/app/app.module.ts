import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import {FormsModule} from '@angular/forms';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import {BsDropdownModule} from 'ngx-bootstrap';
import {AuthenticationModule} from './shared/auth/authentication.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticatedGuard} from './shared/auth/authenticated.guard';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceDetailsComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    AuthenticationModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
