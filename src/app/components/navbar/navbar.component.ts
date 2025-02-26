import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service'; // Assure-toi que le service est bien importé

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchKeyword: string = ''; // Variable pour stocker la recherche de l'utilisateur

  constructor(private hotelService: HotelService) {}

  onSearch(event: Event) {
    event.preventDefault();  // Empêche le rechargement de la page lors de la soumission du formulaire
    if (this.searchKeyword.trim()) {
      this.hotelService.searchHotels(this.searchKeyword).subscribe(hotels => {
        console.log(hotels);  // Affiche les hôtels recherchés dans la console (à remplacer par un affichage dans la page)
      });
    }
  }
}
