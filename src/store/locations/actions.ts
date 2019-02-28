import { nestoria } from '../../services/api';
import { AxiosPromise } from 'axios';

export enum ActionTypes {
  GET_LOCATIONS_BY_NAME = 'locations/GET_LOCATIONS_BY_NAME',
  GET_LOCATIONS_BY_NAME_REQUEST = 'locations/GET_LOCATIONS_BY_NAME_REQUEST',
  GET_LOCATIONS_BY_NAME_SUCCESS = 'locations/GET_LOCATIONS_BY_NAME_SUCCESS',
  GET_LOCATIONS_BY_NAME_FAILURE = 'locations/GET_LOCATIONS_BY_NAME_FAILURE',
  GET_LOCATIONS_BY_COORDS = 'locations/GET_LOCATIONS_BY_COORDS',
  GET_LOCATIONS_BY_COORDS_REQUEST = 'locations/GET_LOCATIONS_BY_COORDS_REQUEST',
  GET_LOCATIONS_BY_COORDS_SUCCESS = 'locations/GET_LOCATIONS_BY_COORDS_SUCCESS',
  GET_LOCATIONS_BY_COORDS_FAILURE = 'locations/GET_LOCATIONS_BY_COORDS_FAILURE',
  SET_SEARCH_STATUS = 'locations/SET_SEARCH_STATUS'
}

export interface GetLocationActionByName {
  type: ActionTypes.GET_LOCATIONS_BY_NAME
    | ActionTypes.GET_LOCATIONS_BY_NAME_REQUEST
    | ActionTypes.GET_LOCATIONS_BY_NAME_SUCCESS
    | ActionTypes.GET_LOCATIONS_BY_NAME_FAILURE
  request: AxiosPromise
  payload?: any
}

export interface GetLocationActionByCoords {
  type: ActionTypes.GET_LOCATIONS_BY_COORDS
    | ActionTypes.GET_LOCATIONS_BY_COORDS_REQUEST
    | ActionTypes.GET_LOCATIONS_BY_COORDS_SUCCESS
    | ActionTypes.GET_LOCATIONS_BY_COORDS_FAILURE
  request: AxiosPromise
  payload?: any
}

export interface SetSearchStatusAction {
  type: ActionTypes.SET_SEARCH_STATUS
  payload: string
}

export function getLocationsByName(placeName: string): GetLocationActionByName {
  return {
    type: ActionTypes.GET_LOCATIONS_BY_NAME,
    request: nestoria.get('/locations/searchByName', { params: { placeName } }),
  };
}

export function getLocationsByCoords(coords: object): GetLocationActionByCoords {
  return {
    type: ActionTypes.GET_LOCATIONS_BY_COORDS,
    request: nestoria.get('/locations/searchByCoordinates', { params: coords }),
  };
}

export function setSearchStatus(status: string): SetSearchStatusAction {
  return {
    type: ActionTypes.SET_SEARCH_STATUS,
    payload: status,
  };
}
