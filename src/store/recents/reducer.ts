import { ActionTypes } from './actions';
import { createReducer } from '../../services/createReducer';

export interface State {
  readonly searches: Array<any>;
  readonly lastSearch: any | null
}

export const initialState: State = {
  searches: [],
  lastSearch: null,
};


export const reducer = createReducer(initialState, {
  [ActionTypes.ADD_QUERY]: (state: State, payload: any) => {
    const location = payload;
    let searches: Array<any> = [...state.searches];
    if (searches.length === 5) {
      searches.pop();
    }
    if (state.searches.findIndex((search: any) => location.id === search.id) < 0) {
      searches = [location, ...state.searches];
    }
    return {
      ...state,
      searches,
      lastSearch: location,
    };
  },
});
