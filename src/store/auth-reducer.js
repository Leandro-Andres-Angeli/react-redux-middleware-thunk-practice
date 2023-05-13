import { authTypes } from './auth-types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      return action.payload;
    case authTypes.LOGOUT:
      return {};

    default:
      return {};
  }
};
