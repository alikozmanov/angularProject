import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './components/city-list/city-list.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';



const routes: Routes = [
  { path: '', component: CityListComponent },
  { path: 'hotels/:cityId', component: HotelListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/add', component: HotelFormComponent },
  { path: 'hotels/edit/:id', component: HotelFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
