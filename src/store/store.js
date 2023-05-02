import { combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import { storeReducer } from './store-reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ fruits: storeReducer });
export const store = configureStore({
  reducer,
  enhancers: composeEnhancers,
});
