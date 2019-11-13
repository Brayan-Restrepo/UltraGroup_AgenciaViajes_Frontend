import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { FiltroHotelModel } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public filtroHotel: FiltroHotelModel;

  constructor(
    private apiService: ApiService
  ) { }
    
  public postFiltrarHotel(filtroHotel: FiltroHotelModel): Observable<any> {
    this.filtroHotel = Object.assign({}, filtroHotel);
    return this.apiService.post<any>('hotel/buscar', filtroHotel);
  }

  public postReservar(reserva: any): Observable<any> {
    reserva.fechaEntrada = this.filtroHotel.fechaEntrada;
    reserva.fechaSalida = this.filtroHotel.fechaSalida;
    return this.apiService.post<any>('reserva', reserva);
  }

  public getFiltroHotel(): FiltroHotelModel {
    return Object.assign({}, this.filtroHotel);
  }

}
