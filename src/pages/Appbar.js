import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUser } from './../auth_functions/auth';
export const Appbar = () => {
  const dispatch = useDispatch();
  const handleSignout = () => {
    console.log('signout');
    dispatch(signOutUser());
  };
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          React Redux Middleware and Async Practice
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
              to='/'
              exact
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
              to='/products'
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
              to='/cakes-page'
            >
              Cakes Page
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
              to='/thunk-section'
            >
              Thunk Section
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
              to='/firebase-section'
            >
              Firebase Section
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
              to='/login'
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
              to='/signin'
            >
              Signin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={handleSignout}>Sign Out</Button>
      </Container>
    </Navbar>
  );
};
