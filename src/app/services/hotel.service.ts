import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities`);
  }

  getHotelsByCity(cityId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities/${cityId}`);
  }

  searchHotels(keyword: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/hotels/search?keyword=${keyword}`);
  }

  // Supprimer la duplication ici
  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/hotels/${id}`);
  }

  // Récupérer tous les hôtels
  getHotels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hotels`);
  }

  // Récupérer un hôtel par ID
  getHotelById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/hotels/${id}`);
  }

  // Ajouter un nouvel hôtel
  addHotel(hotel: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/hotels`, hotel);
  }

  // Modifier un hôtel existant
  updateHotel(id: number, hotel: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/hotels/${id}`, hotel);
  }
}
