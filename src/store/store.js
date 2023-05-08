import {
  applyMiddleware,
  combineReducers,
  compose,
  configureStore,
  createStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { storeReducer } from './store-reducers';
import { cakeReducer } from './second-reducer';
import { forbiddenWordsMiddleware } from './cakes-middleware';
import { types } from './store-types';
import { usersReducer } from './users-reducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  fruits: storeReducer,
  cakes: cakeReducer,
  users: usersReducer,
});

function logger() {
  return function (next) {
    return function (action) {
      console.log('middleware on');
      console.log(action.type);
      return next(action);
    };
  };
}
const arrowLogger = (store) => (next) => (action) => {
  console.log('arrow logger : ', action.type);
  return next(action);
};
//Applying Middleware with vanilla redux
// export const store = createStore(
//   reducer,
//   composeEnhancers(
//     applyMiddleware(logger, arrowLogger, forbiddenWordsMiddleware, thunk)
//   )
// );
//Applying Middleware with vanilla redux
//Applying Middleware with redux toolkit
export const store = configureStore({
  reducer,
  // enhancers: composeEnhancers,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(logger).concat(arrowLogger).concat(thunk),
  middleware: [...getDefaultMiddleware(), logger, arrowLogger],
});

//Applying Middleware with redux toolkit
