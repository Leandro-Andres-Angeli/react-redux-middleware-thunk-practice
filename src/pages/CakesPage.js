import React, { useState } from 'react';
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  Modal,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Cake } from '../helpers/cakeModel';
import { cakeActions } from './../store/second-reducer-actions';
import { idGenerator } from './../helpers/idGenerator';

const CakesPage = ({ cakes, dispatch }) => {
  // console.log(cakes);
  return (
    <Container fluid>
      <h1>Cakes Page</h1>
      <AddCakeForm {...{ dispatch }}></AddCakeForm>
      <Container>
        <Row>
          {cakes.map((cake) => (
            <Col key={cake.id} xs={12} md={6} lg={4}>
              <CakeCard {...{ cake, dispatch }}></CakeCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default connect(function (state) {
  return { cakes: state.cakes };
})(CakesPage);
const AddCakeForm = ({ dispatch }) => {
  const handleAdd = (e) => {
    e.preventDefault();
    //Redux toolkit's store throws error when working with classes , better use plain JS Objects
    // const cake = new Cake(e.target.title.value);
    // console.log(cake);
    //Redux toolkit's store throws error when working with classes , better use plain JS Objects
    const cakeObj = {
      id: idGenerator(),
      title: e.target.title.value,
      previewDescription: 'preview description cake',
      detailDescription: 'detail description cake',
      image:
        'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    };

    dispatch(cakeActions.add(cakeObj));
  };
  return (
    <Form onSubmit={handleAdd} className='p-2 m-2 border'>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>New Cake Title</Form.Label>
        <Form.Control type='text' name='title' placeholder='add cake name' />
      </Form.Group>
      <Button
        variant='primary'
        type='submit'
        // onClick={() => dispatch(cakeActions.add({ id: 1, data: 'add' }))}
      >
        Add
      </Button>
    </Form>
  );
};
const CakeModal = ({ show, handleClose, cake, dispatch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target.form));
    const formToSubmit = { ...cake, ...formData };
    // console.log(formToSubmit);
    dispatch(cakeActions.edit(formToSubmit));
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cake data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>New Cake Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              placeholder='add cake name'
            />
            <Form.Label>New Cake Preview Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='add cake preview description'
              name='previewDescription'
            />
            <Form.Label>New Cake Detail Description</Form.Label>
            <Form.Control
              as='textarea'
              type='text'
              style={{ height: '100px' }}
              placeholder='add cake preview description'
              name='detailDescription'
            />
            <Button type='submit' variant='primary' onClick={handleSubmit}>
              Save Changes
            </Button>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

const CakeCard = ({ cake, dispatch }) => {
  // console.log(dispatch);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <CakeModal
        {...{ show, setShow, handleClose, handleShow, cake, dispatch }}
      ></CakeModal>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          style={{ maxHeight: '10rem', objectFit: 'cover' }}
          src={cake.image || 'holder.js/100px180'}
        />
        <Card.Body>
          <Card.Title>{cake.title || ''}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {cake.previewDescription || ''}
          </Card.Subtitle>
          <Card.Text>{cake.detailDescription || ''}</Card.Text>

          <Button
            variant='primary'
            onClick={() => setShow(true)}
            // onClick={() => dispatch(cakeActions.edit({ id: 1, data: 'edit' }))}
          >
            Edit
          </Button>
          <Button
            variant='primary'
            onClick={() => dispatch(cakeActions.deleteOne({ id: cake.id }))}
          >
            Delete
          </Button>
          <Button
            variant='primary'
            onClick={() => dispatch(cakeActions.deleteAll())}
          >
            Delete all
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
