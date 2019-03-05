import * as _ from 'underscore';

import { PropertyItem } from '@app/types/property.types';
import { createReducer } from '@app/services/createReducer';
import { ActionTypes } from '@app/store/favorites/actions';
import { FavoritesStorage } from '@app/types/favorites.types';

const loadFavoritesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favorites') || '{}');
};

export interface State {
  favorites: FavoritesStorage;
}

export const initialState: State = {
  favorites: loadFavoritesFromLocalStorage(),
};

const addItemToFavorites = (state: State, property: PropertyItem) => {
  const favorites = { ...state.favorites };
  favorites[property.id] = property;
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return {
    ...state,
    favorites,
  };
};

const removeItemFromFavorites = (state: State, propertyId: string) => {
  const favorites = _.omit({ ...state.favorites }, propertyId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return {
    ...state,
    favorites,
  };
};

export const reducer = createReducer(initialState, {
  [ActionTypes.ADD_TO_FAVES]: addItemToFavorites,
  [ActionTypes.DELETE_FROM_FAVES]: removeItemFromFavorites,
});
