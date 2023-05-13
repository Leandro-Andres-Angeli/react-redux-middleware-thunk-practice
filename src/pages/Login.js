import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { googleLogin, loginUser } from './../auth_functions/auth';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const handleGoogleLogin = (e) => {
    e.preventDefault();

    dispatch(googleLogin());
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    const logged = dispatch(loginUser(formData));
  };
  return (
    <>
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
      <Container fluid className='px-5'>
        <Card.Link href='#' onClick={handleGoogleLogin}>
          login with google
        </Card.Link>
      </Container>
    </>
  );
};

export default Login;
