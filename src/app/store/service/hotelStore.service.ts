import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'; import { HotelModel, HabitacionModel, FiltroHotelModel } from 'src/app/models/models';
import * as HotelActions from '../actions/hotel.actions';
import * as HotelSelectors from '../../selectors/hotel.selectors';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HotelStoreService {

  constructor(private store: Store<HotelModel>) { }

  public loadPaymentMethods() {
    this.store.dispatch(HotelActions.loadHotel());
  }

  public addHotel(newHotel: HotelModel[]) {
    this.store.dispatch(
      HotelActions.addHotel({
        newHotel: newHotel
      })
    );
  }

  // public getPaymentMethodsList$(): Observable<HabitacionModel[]> {
  //     return this.store.select(HotelSelectors.getPaymentMethodsList);
  //   }

  public getSelectAllHoteles$(): Observable<HotelModel[]> {
    return this.store.select(HotelSelectors.getSelectAllHoteles);
  }

  public getSelectHotelById$(idHotel: string): Observable<HotelModel> {
    return this.store.select(HotelSelectors.getSelectHotelById, { idHotel });
  }

  public getSelectHotelByIdPortada$(idHotel: string): Observable<string> {
    return this.store.select(HotelSelectors.getSelectHotelByIdPortada, { idHotel });
  }

  public getSelectHotelByIdHabitacion$(idHabitacion: string): Observable<HotelModel> {
    return this.store.select(HotelSelectors.getSelectHotelByIdHabitacion, { idHabitacion });
  }

  public getSelectHabitacionById$(idHabitacion: string): Observable<HabitacionModel> {
    return this.store.select(HotelSelectors.getSelectHabitacionById, { idHabitacion });
  }
  
}