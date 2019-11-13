import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { HotelModel } from '../models/models';
import * as HotelActions from '../store/actions/hotel.actions';

export const hotelFeatureKey = 'hotel';

export interface HotelState {
  hotel: HotelModel[];
}

export const initialState: HotelState = {
  hotel: []
};

const hotelReducer = createReducer(
  initialState,
  on(HotelActions.loadHotel, state => state),
  on(HotelActions.addHotel, (state: HotelState, { newHotel } ) => {
    return {      
      hotel: newHotel
    };
  })
);

export function hotelesReducer(state: HotelState | undefined, action: Action) {
  return hotelReducer(state, action);
}

// export interface State {

// }

// export const reducers: ActionReducerMap<State> = {

// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
