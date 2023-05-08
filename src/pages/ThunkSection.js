import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getUsers } from '../store/users-reducer';
import { fetchFromApi, GetData } from './../async_function/async_funcs';
import { usersReducer } from './../store/users-reducer';

const ThunkSection = () => {
  const dispatch = useDispatch();
  const handleLoadUsers = () => {
    console.log('load users');
    dispatch(fetchFromApi());
  };
  return (
    <Container>
      ThunkSection
      <Button onClick={handleLoadUsers}>Load Users</Button>
    </Container>
  );
};

export default ThunkSection;
