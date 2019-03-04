import { PropertyItem } from '@app/types/property.types';
import { createReducer } from '@app/services/createReducer';
import { ActionTypes } from '@app/store/properties/actions';
import { PropertiesLocation } from '@app/types/locations.types';
import { PropertiesResponse } from '@app/types/api.response.types';

export interface State {
  properties: Array<PropertyItem>;
  location: PropertiesLocation | null;
  hasMore: boolean;
  totalResults: number;
  page: number;
  errorMessage: string;
  loading: boolean;
}

export const initialState: State = {
  properties: [],
  location: null,
  hasMore: false,
  totalResults: 0,
  errorMessage: '',
  loading: false,
  page: 0,
};


const loadingGetPropertiesHandler = (state: State) => ({
  ...state,
  errorMessage: '',
  loading: true,
});

const successGetPropertiesHandler = (
  state: State,
  { page, properties, hasMore, totalResults, location }: PropertiesResponse
) => ({
  ...state,
  properties: [...state.properties, ...properties],
  loading: false,
  location,
  page,
  hasMore,
  totalResults,
});

const failureGetPropertiesHandler = (state: State, errorMessage: string) => ({
  ...state,
  loading: false,
  errorMessage,
});

const resetPropertiesHandler = () => initialState;

export const reducer = createReducer(initialState, {
  [ActionTypes.GET_PROPERTIES_REQUEST]: loadingGetPropertiesHandler,
  [ActionTypes.GET_PROPERTIES_SUCCESS]: successGetPropertiesHandler,
  [ActionTypes.GET_PROPERTIES_FAILURE]: failureGetPropertiesHandler,
  [ActionTypes.RESET_PROPERTIES]: resetPropertiesHandler,
});
