import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { FiltroHotelModel } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private apiService: ApiService
  ) { }
    
  public postFiltrarHotel(filtroHotel: FiltroHotelModel): Observable<any> {
    return this.apiService.post<any>('hotel/buscar', filtroHotel);
  }
}
