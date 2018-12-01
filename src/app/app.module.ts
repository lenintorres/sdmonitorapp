import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceGridComponent } from './device-grid/device-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    DeviceGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
