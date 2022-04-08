import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


 function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="">
        <img
          alt=""
          src= "/deusa-themis.svg"  
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      UTIP
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default Nav;
