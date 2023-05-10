import { getUsers } from '../store/users-reducer';
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';
import { app } from './../firebase_config/firebase_config';
import { firebaseGetAll, firebasePost } from './../store/firebase-actions';
import { idGenerator } from '../helpers/idGenerator';

const db = getFirestore(app);
export const GetFirebaseData = () => {
  let parsedTodos = [];

  return async (dispatch) => {
    const todos = await getDocs(collection(db, 'todos'));
    // const todosSnap = onSnapshot(collection(db, 'todos'), querySnap );
    // console.log(todosSnap);
    todos.forEach((todo) => parsedTodos.push({ id: todo.id, ...todo.data() }));
    console.log(parsedTodos);
    dispatch(firebaseGetAll(parsedTodos));
  };
};
export const postFirebaseData = (newTodo) => {
  console.log(newTodo);
  return async (dispatch) => {
    // const todos = await getDocs(collection(db, 'todos'));
    //Add doc to firebase without id
    // await addDoc(collection(db, 'todos'), newTodo);
    //Add doc to firebase without id

    const todosRef = collection(db, 'todos');

    const id = idGenerator();
    await addDoc(todosRef, { id, ...newTodo });

    await dispatch(firebasePost({ id, ...newTodo }));
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
