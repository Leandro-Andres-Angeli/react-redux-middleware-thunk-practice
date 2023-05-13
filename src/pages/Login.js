import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { loginUser } from './../auth_functions/auth';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    const logged = dispatch(loginUser(formData));
  };
  return (
    <Form className='p-5 m-5 border' onSubmit={handleLogin}>
      <h2>Login with email and password</h2>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type='email' placeholder='Enter email' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='Enter password'
        />
      </Form.Group>
      <Button type='submit'>Signin</Button>
    </Form>
  );
};

export default Login;
