import { AxiosPromise } from 'axios';

import { nestoria } from '../../services/api';

export enum ActionTypes {
  GET_PROPERTIES = 'properties/GET_PROPERTIES_BY_NAME',
  GET_PROPERTIES_REQUEST = 'properties/GET_PROPERTIES_BY_NAME_REQUEST',
  GET_PROPERTIES_SUCCESS = 'properties/GET_PROPERTIES_BY_NAME_SUCCESS',
  GET_PROPERTIES_FAILURE = 'properties/GET_PROPERTIES_BY_NAME_FAILURE',
  RESET_PROPERTIES = 'properties/RESET_PROPERTIES'
}

export interface GetPropertiesAction {
  type: ActionTypes.GET_PROPERTIES
    | ActionTypes.GET_PROPERTIES_REQUEST
    | ActionTypes.GET_PROPERTIES_SUCCESS
    | ActionTypes.GET_PROPERTIES_FAILURE
  request: AxiosPromise
  payload?: any
}

export interface ResetPropertiesAction {
  type: ActionTypes.RESET_PROPERTIES
}

export const getProperties = (placeName: string, page: number): GetPropertiesAction => ({
  type: ActionTypes.GET_PROPERTIES,
  request: nestoria.get(`/locations/${placeName}/properties`, { params: { page } }),
});

export const resetProperties = (): ResetPropertiesAction => ({
  type: ActionTypes.RESET_PROPERTIES
});