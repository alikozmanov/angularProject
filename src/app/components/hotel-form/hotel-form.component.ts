import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {
  hotel: any = { name: '', address: '', stars: 3, priceMin: 0, phone: '', rooms: 0, imageUrl: '' };
  isEditing: boolean = false;

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('id');
    if (hotelId) {
      this.isEditing = true;
      this.hotelService.getHotelById(+hotelId).subscribe(data => {
        this.hotel = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.hotelService.updateHotel(this.hotel.id, this.hotel).subscribe(() => {
        this.router.navigate(['/hotels']);
      });
    } else {
      this.hotelService.addHotel(this.hotel).subscribe(() => {
        this.router.navigate(['/hotels']);
      });
    }
  }
}
