import { Component, OnInit, Input } from '@angular/core';
import { HabitacionModel, HotelModel } from 'src/app/models/models';
import { HotelStoreService } from 'src/app/store/service/hotelStore.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {

  public getSelectHotelById$: Observable<HotelModel>;
  public getSelectHotelByIdPortada$: Observable<string>;

  // @Input('habitaciones') 
  // public habitaciones: HabitacionModel[];
  
  // @Input('portadaUrl') 
  // public portadaUrl: string;
  
  constructor(
    private _hotelStoreService: HotelStoreService,
    private rutaActiva: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.getSelectHotelById$ = this._hotelStoreService.getSelectHotelById$(params.idHotel);
        this.getSelectHotelByIdPortada$ = this._hotelStoreService.getSelectHotelByIdPortada$(params.idHotel);
      }
    );    
  }

  public onReservar(idHabitacion: string) {
    this.router.navigate(['home', 'reserva', idHabitacion]);
  }

}
