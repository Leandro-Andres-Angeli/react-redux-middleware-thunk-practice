import React from 'react';
import { Button, Container, Form, ListGroup, Stack } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { store } from './../store/store';
import { deleteProduct, updateProduct } from './../store/store-actions';

const mapStateToProps = ({ fruits }) => ({ fruits });
const Product = ({ name, id }) => {
  const dispatch = useDispatch();
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
const Products = ({ fruits }) => {
  // console.log(fruits);
  return (
    <Container fluid>
      <h1>Handling Products via Middleware</h1>
      <ListGroup>
        {fruits.map(({ id, name }) => (
          <Product key={id} {...{ name, id }}></Product>
        ))}
      </ListGroup>
    </Container>
  );
};

export default connect(mapStateToProps)(Products);
// export default Products;
