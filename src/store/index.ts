import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

import { initialStore, rootReducer } from './root/reducer';
import { requestApiMiddleware } from '../middlewares/requesApiMiddleware';


export const store = createStore(
  rootReducer,
  initialStore,
  applyMiddleware(requestApiMiddleware, logger)
);
