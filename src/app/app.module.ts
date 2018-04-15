import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpModule } from '@angular/http';
import { ManageService } from './manage.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
