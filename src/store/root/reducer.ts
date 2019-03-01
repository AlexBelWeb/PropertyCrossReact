import { combineReducers } from 'redux';

import * as recents from '../recents/reducer';
import * as locations from '../locations/reducer'

export interface Store {
  recents: recents.State;
  locations: locations.State
}

export const initialStore: Store = {
  recents: recents.initialState,
  locations: locations.initialState
};

export const rootReducer = combineReducers<Store>({
  recents: recents.reducer,
  locations: locations.reducer
});
