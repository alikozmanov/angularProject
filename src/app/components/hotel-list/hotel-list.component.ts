import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: any[] = []; // Liste des hôtels trouvés
  cityName: string = ''; // Nom du mot-clé recherché

  constructor(private hotelService: HotelService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer le mot-clé depuis les queryParams de l'URL
    this.route.queryParams.subscribe(params => {
      const keyword = params['keyword'];  // 'keyword' est le paramètre de l'URL
      if (keyword) {
        this.cityName = keyword;  // Utiliser le mot-clé comme nom de la ville
        this.searchHotels(keyword);  // Appeler la méthode pour effectuer la recherche
      }
    });
  }

  // Méthode pour effectuer la recherche des hôtels par mot-clé
  searchHotels(keyword: string): void {
    this.hotelService.searchHotels(keyword).subscribe(data => {
      this.hotels = data;  // Remplir la liste des hôtels avec les résultats
    });
  }
}
