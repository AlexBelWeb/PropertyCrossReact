import { combineReducers } from 'redux';

import * as recents from '../recents/reducer';
import * as locations from '../locations/reducer'
import * as properties from '../properties/reducer'

export interface Store {
  recents: recents.State;
  locations: locations.State
  properties: properties.State
}

export const initialStore: Store = {
  recents: recents.initialState,
  locations: locations.initialState,
  properties: properties.initialState
};

export const rootReducer = combineReducers<Store>({
  recents: recents.reducer,
  locations: locations.reducer,
  properties: properties.reducer
});
