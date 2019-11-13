import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HotelModel, HabitacionModel } from 'src/app/models/models';
import { HotelStoreService } from 'src/app/store/service/hotelStore.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public hoteles: HotelModel[];
  public verHabitaciones: any;  
  
  // public paymentMethodsList$: Observable<HabitacionModel[]>;
  // public selectHoteles$: Observable<HotelModel>;

  constructor(
    // private router: Router,
    // private _hotelService: HotelService,
    // private _hotelStoreService: HotelStoreService
  ) { }

  ngOnInit() {
  }
}
