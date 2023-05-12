import { getUsers } from '../store/users-reducer';
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  addDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { app } from './../firebase_config/firebase_config';
import { firebaseGetAll, firebasePost } from './../store/firebase-actions';
import { idGenerator } from '../helpers/idGenerator';
import { imageUpload } from './../image_upload/imageUpload';

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
  const { img, ...formFields } = newTodo;
  return async (dispatch) => {
    // const todos = await getDocs(collection(db, 'todos'));
    //Add doc to firebase without id
    // await addDoc(collection(db, 'todos'), newTodo);
    //Add doc to firebase without id

    const todosRef = collection(db, 'todos');

    const id = idGenerator();
    const img_url = await imageUpload(img);
    await addDoc(todosRef, { id, img: img_url, ...formFields });

    await dispatch(firebasePost({ id, img: img_url, ...formFields }));
  };
};
export const putFirebaseData = (todoToUpdate) => {
  console.log(todoToUpdate);
  const { id, img, ...formFields } = todoToUpdate;
  return async (dispatch) => {
    // const todos = await getDocs(collection(db, 'todos'));
    //Add doc to firebase without id
    // await addDoc(collection(db, 'todos'), newTodo);
    //Add doc to firebase without id
    const img_url = img ? await imageUpload(img) : '';
    await updateDoc(doc(db, 'todos', id), { ...formFields, img: img_url });
    // await collection(db, 'todos')
    //   .doc(id)
    //   .update({ ...formFields, img: img_url });

    // await addDoc(todosRef, { id, img: img_url, ...formFields });

    // await dispatch(firebasePost({ id, img: img_url, ...formFields }));
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
