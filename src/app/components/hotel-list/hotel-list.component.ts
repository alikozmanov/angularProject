import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

// Définir l'interface pour le type des données retournées par l'API
interface HotelData {
  hotels: any[];  // Liste des hôtels
  name: string;   // Nom de la ville
}

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];  // Liste des hôtels trouvés
  cityName: string = '';

  constructor(private hotelService: HotelService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer le cityId depuis les params de l'URL
    this.route.params.subscribe(params => {
      const cityId = params['cityId'];
      if (cityId) {
        this.searchHotels(cityId);  // Appel à la méthode pour récupérer les hôtels pour la ville
      }
    });
  }

  // Méthode pour effectuer la recherche des hôtels par cityId
  searchHotels(cityId: number): void {
    this.hotelService.getHotelsByCity(cityId).subscribe((data: HotelData) => {
      console.log('Données des hôtels récupérées:', data); // vérifier les données reçues
      this.hotels = data.hotels; // pour récupérer la liste des hôtels
      this.cityName = data.name; // le nom de la ville
    }, error => {
      console.error('Erreur lors de la récupération des hôtels:', error);
    });
  }

  // Méthode pour supprimer un hôtel
  deleteHotel(hotelId: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet hôtel ?")) {
      this.hotelService.deleteHotel(hotelId).subscribe(() => {
        this.hotels = this.hotels.filter(hotel => hotel.id !== hotelId); // Mettre à jour la liste des hôtels après suppression
      });
    }
  }
}
