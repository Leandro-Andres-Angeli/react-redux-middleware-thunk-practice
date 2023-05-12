import React from 'react';
import { useEffect } from 'react';
import {
  GetFirebaseData,
  postFirebaseData,
  putFirebaseData,
} from '../async_function/async_funcs';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListGroup,
  Form,
  Button,
  Container,
  InputGroup,
  Image,
} from 'react-bootstrap';
// import { firebasePost } from '../store/firebase-actions';
import { imageUpload } from './../image_upload/imageUpload';
import { useState } from 'react';

const TodoComponent = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, user, desc, done } = todo;
  const img = todo.img || '';
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = Object.fromEntries(new FormData(form));
    // console.log({ ...formData, done: form.done.checked });
    dispatch(putFirebaseData({ ...formData, done: form.done.checked, id }));
  };
  return (
    <ListGroup.Item data-id={id}>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>User</InputGroup.Text>
          <Form.Control name='user' defaultValue={user || ''} />
        </InputGroup>
        <Form.Check // prettier-ignore
          type='checkbox'
          label='Done'
          name='done'
          id='formCheckDefault'
          defaultChecked={done}
        />

        <input name='img' type='file' alt='' />
        {img && <Image src={img} fluid alt=''></Image>}
        <Button type='submit'>Apply changes</Button>
      </Form>
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const img = e.target.img.files[0];
  //   // console.log(img);
  //   // async function handleUpload() {
  //   //   const url = await imageUpload(img);
  //   // }
  //   // handleUpload();
  //   (async () => {
  //     console.log(img);
  //     const url = await imageUpload(img);
  //     await setUrl(url);
  //   })();
  //   // imageUpload(img).then((res) => setUrl(res));
  // };

  return (
    <>
      <Form className='p-5 m-5 border' onSubmit={addTodo}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Add Todo Form</Form.Label>
          <Form.Control type='text' name='desc' placeholder='Add New Todo' />
        </Form.Group>
        <input
          name='img'
          type='file'
          accept='.png,.jpg,.jpeg,.webp'
          // multiple='true'
        />
        <Button variant='primary' type='submit'>
          Add To Do
        </Button>
      </Form>
      {/* <Form onSubmit={handleSubmit}>
        <input
          name='img'
          type='file'
          accept='.png,.jpg,.jpeg,.webp'
          // multiple='true'
        />
        <Button type='submit'>Upload pic</Button>
      </Form> */}
      {/* {JSON.stringify(url)} */}
    </>
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
        {todos.map((todo) => (
          <TodoComponent key={todo.id} {...{ todo }} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default FirebaseSection;
