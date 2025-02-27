import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:8080/api';  // Api back-end

  constructor(private http: HttpClient) { }

// Récupérer la liste des villes depuis une API
  getCities(): Observable<any> { //  permet de récupérer des données
    return this.http.get(`${this.apiUrl}/cities`);
  }

// Récupérer les hôtels d'une ville
  getHotelsByCity(cityId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities/${cityId}`);
  }
 // Méthode pour rechercher les hôtels par mot-clé
  searchHotels(keyword: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/hotels/search?keyword=${keyword}`);
  }
}
