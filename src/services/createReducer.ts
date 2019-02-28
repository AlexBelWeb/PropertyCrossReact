import { State as LocationState } from '../store/locations/reducer';
import { State as RecentsState } from '../store/recents/reducer';

type InitialState = LocationState | RecentsState

export const createReducer = (initialState: InitialState, reducerMap: any) => (
  state = initialState,
  action: any
) => {
  const reducer = reducerMap[action.type];
  return reducer ? reducer(state, action.payload) : state;
};
