import { State as LocationState } from '../store/locations/reducer';
import { State as RecentsState } from '../store/recents/reducer';
import { State as PropertiesStore } from '../store/properties/reducer'

type InitialState = LocationState | RecentsState | PropertiesStore

export const createReducer = (initialState: InitialState, reducerMap: any) => (
  state = initialState,
  action: any
) => {
  const reducer = reducerMap[action.type];
  return reducer ? reducer(state, action.payload) : state;
};
