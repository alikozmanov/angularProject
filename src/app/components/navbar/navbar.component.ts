import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchKeyword: string = ''; // Variable pour stocker la recherche de l'utilisateur

  constructor(private hotelService: HotelService) {}

onSearch(event: Event) {
  event.preventDefault();  // Empêche le rechargement de la page
  console.log("Recherche avec le mot-clé : ", this.searchKeyword);
  if (this.searchKeyword.trim()) {
    this.hotelService.searchHotels(this.searchKeyword).subscribe(hotels => {
      console.log("Résultats des hôtels : ", hotels);
    });
  }
}

}
