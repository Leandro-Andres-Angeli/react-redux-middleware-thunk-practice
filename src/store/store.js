import { combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import { storeReducer } from './store-reducers';
import { cakeReducer } from './second-reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ fruits: storeReducer, cakes: cakeReducer });
export const store = configureStore({
  reducer,
  enhancers: composeEnhancers,
});
