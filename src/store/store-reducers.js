import { idGenerator } from './../helpers/idGenerator';
import { types } from './store-types';
const initialState = [
  { id: idGenerator(), name: 'apple' },
  { id: idGenerator(), name: 'banana' },
  { id: idGenerator(), name: 'peach' },
  { id: idGenerator(), name: 'orange' },
  { id: idGenerator(), name: 'blueberry' },

  { id: idGenerator(), name: 'watermelon' },
];

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      return [...state, action.payload];
    case types.updateProduct:
      return state.map((fruit) =>
        fruit.id === action.payload.id ? { ...action.payload } : fruit
      );
    case types.deleteProduct:
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};
