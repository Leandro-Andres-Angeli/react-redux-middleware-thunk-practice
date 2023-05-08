import { getUsers } from '../store/users-reducer';

export const GetData = () => {
  // console.log('in');
  // return function (dispatch) {
  //   dispatch(getUsers());
  //   console.log('children');
  // };
};
export function fetchFromApi() {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    const json = await response.json();
    console.log(json);
    dispatch(getUsers(json));
  };
}
