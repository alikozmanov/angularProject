import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

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
        this.searchHotels(cityId);  // Appel à la méthode pour récupérer les hôtels pour la villee
      }
    });
  }

  // Méthode pour effectuer la recherche des hôtels par cityId
  searchHotels(cityId: number): void {
    this.hotelService.getHotelsByCity(cityId).subscribe(data => {
      console.log('Données des hôtels récupérées:', data);  // vérifier les données reçues
      this.hotels = data.hotels;  // pour récupérer la liste des hôtels
      this.cityName = data.name;  //  le nom de la ville
    }, error => {
      console.error('Erreur lors de la récupération des hôtels:', error);
    });
  }
}
