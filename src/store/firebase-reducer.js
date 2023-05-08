import { firebaseTypes } from './firebase-types';

export const firebaseReducer = (state = [], action) => {
  switch (action.type) {
    case firebaseTypes.getAll:
      console.log('get all');
      return action.payload;
    default:
      return state;
  }
};
