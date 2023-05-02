import { types } from './store-types';

export const addProduct = (payload) => ({ type: types.addProduct, payload });
export const deleteProduct = (payload) => ({
  type: types.deleteProduct,
  payload,
});
export const updateProduct = (payload) => ({
  type: types.updateProduct,
  payload,
});
