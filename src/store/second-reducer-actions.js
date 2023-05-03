import { cakeTypes } from './second-reducer-types';
export const cakeActions = {
  add: (payload) => ({ type: cakeTypes.add, payload }),
  edit: (payload) => ({ type: cakeTypes.edit, payload }),
  deleteOne: (payload) => ({ type: cakeTypes.deleteOne, payload }),
  deleteAll: () => ({ type: cakeTypes.deleteAll }),
};
