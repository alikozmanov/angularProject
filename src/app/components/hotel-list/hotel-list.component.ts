import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];
  cityName: string = '';

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {}

  ngOnInit(): void {
    const cityId = this.route.snapshot.paramMap.get('cityId');
    if (cityId) {
      this.hotelService.getHotelsByCity(+cityId).subscribe(data => {
        this.hotels = data.hotels;
        this.cityName = data.name;
      });
    }
  }
}
