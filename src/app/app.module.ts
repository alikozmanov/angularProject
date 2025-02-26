import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CityListComponent } from './components/city-list/city-list.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
