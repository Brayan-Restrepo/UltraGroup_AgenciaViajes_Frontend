import { createAction, props } from '@ngrx/store';
import { HotelModel, FiltroHotelModel } from 'src/app/models/models';

export const loadHotel = createAction(
    '[Hotel] Load Hotel'
);

export const addHotel = createAction(
    '[Hotel] Add Hotel',
    props<{ newHotel: HotelModel[] }>()
);

export const selectHotel = createAction(
    '[Hotel] Select preferred PaymentMethod',
    props<{ idHotel: string }>()
);
