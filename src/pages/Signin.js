import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { createNewUser } from './../auth_functions/auth';

const Signin = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    createNewUser(formData);
  };
  return (
    <Form className='p-5 m-5 border' onSubmit={handleSignIn}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Name</Form.Label>
        <Form.Control name='displayName' type='text' placeholder='Enter name' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type='email' placeholder='Enter email' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='Enter email'
        />
      </Form.Group>
      <Button type='submit'>Register</Button>
    </Form>
  );
};

export default Signin;
