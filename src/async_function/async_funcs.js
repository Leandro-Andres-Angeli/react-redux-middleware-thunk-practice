import { getUsers } from '../store/users-reducer';
import { getFirestore, getDocs, collection } from 'firebase/firestore/lite';
import { app } from './../firebase_config/firebase_config';
import { firebaseGetAll } from './../store/firebase-actions';

export const GetFirebaseData = () => {
  // const getTodos = async () => {
  //   const db = getFirestore(app);
  //   const todos = await getDocs(collection(db, 'todos'));
  //   console.log(todos);
  //   todos.forEach((todo) =>
  //     setFirst((prev) => [...prev, { id: todo.id, ...todo.data() }])
  //   );
  // };
  let parsedTodos = [];
  console.log('in');
  return async (dispatch) => {
    const db = getFirestore(app);
    const todos = await getDocs(collection(db, 'todos'));

    todos.forEach((todo) => parsedTodos.push({ id: todo.id, ...todo.data() }));
    console.log(parsedTodos);
    dispatch(firebaseGetAll(parsedTodos));
  };
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
