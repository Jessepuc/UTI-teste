import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


 function Nav() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" >
        <Container>
            <Navbar.Brand href="">UTIP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Nav;
