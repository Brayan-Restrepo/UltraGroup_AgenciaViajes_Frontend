import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HotelModel } from 'src/app/models/models';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { HotelStoreService } from 'src/app/store/service/hotelStore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public selectHoteles$: Observable<HotelModel[]>;

  constructor(
    configEstrella: NgbRatingConfig,
    private router: Router,
    private _hotelStoreService: HotelStoreService
  ) {
    configEstrella.max = 5;
    configEstrella.readonly = true;
    // this.verHabitaciones
   }

  ngOnInit() {
    this.selectHoteles$ = this._hotelStoreService.getSelectAllHoteles$();  
  }

  public onVerHabitaciones(idHotel: string) {
    console.log('onVerHabitaciones');
    this.router.navigate(['home', 'habitacion', idHotel]);
    // this.verHabitaciones.emit({idHotel: idHotel, activar: true});
  }

}
