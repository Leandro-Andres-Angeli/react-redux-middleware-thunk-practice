import React from 'react';
import { useEffect } from 'react';
import {
  GetFirebaseData,
  postFirebaseData,
} from '../async_function/async_funcs';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Form, Button, Container } from 'react-bootstrap';
// import { firebasePost } from '../store/firebase-actions';

const TodoComponent = ({ id, user, desc, done }) => {
  return (
    <ListGroup.Item data-id={id}>
      <div>{user && `user : ${user}`} </div>
      <div> Done : {JSON.stringify(done)}</div>
      <div> Description : {desc} </div>
    </ListGroup.Item>
  );
};
const AddTodoForm = () => {
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const formData = Object.fromEntries(new FormData(form));
    dispatch(postFirebaseData({ ...formData, user: '', done: false }));
  };
  return (
    <Form className='p-5 m-5 border' onSubmit={addTodo}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Add Todo Form</Form.Label>
        <Form.Control type='text' name='desc' placeholder='Add New Todo' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Add To Do
      </Button>
    </Form>
  );
};
const FirebaseSection = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  useEffect(() => {
    // console.log('render');
    dispatch(GetFirebaseData());
  }, [dispatch]);
  return (
    <Container>
      <AddTodoForm></AddTodoForm>
      <ListGroup>
        {todos.map(({ id, user, desc, done }) => (
          <TodoComponent key={id} {...{ id, user, desc, done }} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default FirebaseSection;
