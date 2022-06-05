import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Coffe Time</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Products</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
