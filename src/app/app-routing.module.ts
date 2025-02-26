import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './components/city-list/city-list.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';

const routes: Routes = [
  { path: '', component: CityListComponent },
  { path: 'hotels/:cityId', component: HotelListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
