import { authTypes } from './auth-types';

export const loginAction = (payload) => ({ type: authTypes.LOGIN, payload });
export const logoutAction = () => ({ type: authTypes.LOGOUT });
