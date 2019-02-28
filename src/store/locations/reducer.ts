import { ActionTypes } from './actions';
import { createReducer } from '../../services/createReducer';

export interface State {
  locations: Array<any>,
  searchStatus: string
  errorMessage: string
}

export const initialState: State = {
  locations: [],
  searchStatus: 'init',
  errorMessage: '',
};

export const reducer = createReducer(initialState, {
  [ActionTypes.GET_LOCATIONS_BY_NAME_REQUEST
  || ActionTypes.GET_LOCATIONS_BY_COORDS_REQUEST]: (state: State) => ({
  ...state,
      error: null,
      searchStatus: 'loading',
      errorMessage: '',
  }),
  [ActionTypes.GET_LOCATIONS_BY_NAME_SUCCESS
  || ActionTypes.GET_LOCATIONS_BY_COORDS_SUCCESS]: (state: State, locations: Array<any>) => ({
    ...state,
    searchStatus: 'success',
    locations,
  }),
  [ActionTypes.GET_LOCATIONS_BY_NAME_FAILURE
  || ActionTypes.GET_LOCATIONS_BY_COORDS_FAILURE]: (state: State, errorMessage: string) => ({
    ...state,
    searchStatus: 'failure',
    errorMessage,
  }),
  [ActionTypes.SET_SEARCH_STATUS]: (state: State, searchStatus: string) => ({
    ...state,
    searchStatus
  })
});

