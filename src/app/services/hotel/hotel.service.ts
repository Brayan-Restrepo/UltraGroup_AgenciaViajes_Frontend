import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { FiltroHotelModel, HotelModel } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public filtroHotel: FiltroHotelModel;

  constructor(
    private apiService: ApiService
  ) { }
    
  /**
   * Guardar el hotel
   * @param hotel 
   */
  public postHotel(hotel: HotelModel): Observable<any> {
    return this.apiService.post<any>('hotel', hotel);
  }

  public getHotel(): Observable<any> {
    return this.apiService.get<any>('hotel');
  }


  public getReservas(): Observable<any> {
    return this.apiService.get<any>('reserva');
  }

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
