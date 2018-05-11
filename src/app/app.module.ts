import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import {FormsModule} from '@angular/forms';
import { DeviceDetailsComponent } from './device-details/device-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
