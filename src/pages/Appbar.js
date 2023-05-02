import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
export const Appbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          React Redux Middleware and Async Practice
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/"
              exact
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/products"
            >
              Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
