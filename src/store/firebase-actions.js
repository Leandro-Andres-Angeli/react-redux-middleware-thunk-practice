import { firebaseTypes } from './firebase-types';
export const firebaseGetAll = (payload) => ({
  type: firebaseTypes.getAll,
  payload,
});
export const firebasePost = (payload) => ({
  type: firebaseTypes.postTodo,
  payload,
});
