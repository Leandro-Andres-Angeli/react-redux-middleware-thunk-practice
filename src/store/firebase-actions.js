import { firebaseTypes } from './firebase-types';
export const firebaseGetAll = (payload) => ({
  type: firebaseTypes.getAll,
  payload,
});
