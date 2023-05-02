import React from 'react';
import { ListGroup, Form, Stack, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteProduct, updateProduct } from './../store/store-actions';

const Product = ({ dispatch, name, id }) => {
  // console.log(props)
  // const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      target: {
        name: { value },
      },
    } = e;

    dispatch(updateProduct({ id, name: value }));
  };

  return (
    <ListGroup.Item key={id}>
      <Form onSubmit={handleSubmit}>
        <Form.Label>fruit name</Form.Label>
        <Form.Control name='name' type='text' defaultValue={name} />
        <Stack direction='horizontal' className='mt-2' gap={3}>
          <Button type='submit' variant='primary'>
            Edit
          </Button>
          <Button
            variant='danger'
            onClick={() => dispatch(deleteProduct({ id }))}
          >
            Delete
          </Button>
        </Stack>
      </Form>
    </ListGroup.Item>
  );
};
export default connect()(Product);
