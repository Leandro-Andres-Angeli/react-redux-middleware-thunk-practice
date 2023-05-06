import { cakeTypes } from './second-reducer-types';
import { cakeActions } from './second-reducer-actions';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      console.log('forbidden word middleware');
      return next(action);
    };
  };
  // return function (next) {
  //   if (action == cakeTypes.add) {
  //     console.log('middleware');
  //   }
  //   return next(action);
  // };
}
