import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './components/city-list/city-list.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', component: CityListComponent },
  { path: 'hotels/:cityId', component: HotelListComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
