import { firebaseTypes } from './firebase-types';
import { produce } from 'immer';
export const firebaseReducer = (state = [], action) => {
  switch (action.type) {
    case firebaseTypes.getAll:
      return action.payload;
    case firebaseTypes.postTodo:
      return produce(state, (draftState) => {
        draftState.push({ ...action.payload, done: false, user: '' });
      });
    default:
      return state;
  }
};
