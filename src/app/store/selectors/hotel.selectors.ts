import { createFeatureSelector, createSelector } from '@ngrx/store';
import { hotelFeatureKey, HotelState } from '../../reducers/index';

export const getPaymentMethodState = createFeatureSelector<HotelState>(
  hotelFeatureKey
);

export const getPaymentMethodsList = createSelector(
  getPaymentMethodState,
  (state: HotelState) => state.hotel
);

export const getSelectAllHoteles = createSelector(
  getPaymentMethodState,
  (state: HotelState) => state.hotel
);

export const getSelectHotelById = createSelector(
  getPaymentMethodState,
  (state: HotelState, props) => {
    return state.hotel.find(e => e.id === props.idHotel)
  }
);

export const getSelectHotelByIdHabitacion = createSelector(
  getPaymentMethodState,
  (state: HotelState, props) => {
    return state.hotel.find(h => h.habitaciones.find(e => e.id === props.idHabitacion))
  }
);

export const getSelectHabitacionById = createSelector(
  getPaymentMethodState,
  (state: HotelState, props) => {
    const data = state.hotel.find(h => { h.habitaciones.find(e => {
      return e.id === props.idHabitacion
    }) !== null });
    if (data) {
      return data.habitaciones.find(e => e.id === props.idHabitacion);
    } else {
      return null;
    }
  }
);

export const getSelectHotelByIdPortada = createSelector(
  getPaymentMethodState,
  (state: HotelState, props) => {
    return state.hotel.find(e => e.id === props.idHotel).portadaUrl
  }
);