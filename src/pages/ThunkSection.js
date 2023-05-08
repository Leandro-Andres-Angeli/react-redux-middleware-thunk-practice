import React from 'react';
import { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { getUsers } from '../store/users-reducer';
import { fetchFromApi, GetData } from './../async_function/async_funcs';
// import { usersReducer } from './../store/users-reducer';

const ThunkSection = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchFromApi());
    console.log('render');
  }, [dispatch]);

  // const handleLoadUsers = () => {
  //   console.log('load users');

  // };
  return (
    <Container>
      ThunkSection
      {JSON.stringify(data)}
      <Button>Load Users</Button>
    </Container>
  );
};

export default ThunkSection;
