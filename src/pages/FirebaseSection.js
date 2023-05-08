import React from 'react';
import { useEffect } from 'react';
import { GetFirebaseData } from '../async_function/async_funcs';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const TodoComponent = ({ id, user, desc, done }) => {
  return (
    <ListGroup.Item data-id={id}>
      <div>{user && `user : ${user}`} </div>
      <div> Done : {JSON.stringify(done)}</div>
      <div> Description : {desc} </div>
    </ListGroup.Item>
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
    <ListGroup>
      {todos.map(({ id, user, desc, done }) => (
        <TodoComponent {...{ id, user, desc, done }} />
      ))}
    </ListGroup>
  );
};

export default FirebaseSection;
