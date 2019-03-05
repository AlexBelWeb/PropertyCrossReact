import { PropertyItem } from '@app/types/property.types';

export enum ActionTypes {
  ADD_TO_FAVES = 'favorites/ADD_TO_FAVES',
  DELETE_FROM_FAVES = 'favorites/DELETE_FROM_FAVES',
}

export interface AddToFavoritesAction {
  type: ActionTypes.ADD_TO_FAVES;
  payload: PropertyItem
}

export interface RemoveFromFavoritesAction {
  type: ActionTypes.ADD_TO_FAVES;
  payload: string
}

export const addToFavorites = (property: PropertyItem) => ({
  type: ActionTypes.ADD_TO_FAVES,
  payload: property,
});

export const removeFromFavorites = (propertyId: string) => ({
  type: ActionTypes.DELETE_FROM_FAVES,
  payload: propertyId,
});