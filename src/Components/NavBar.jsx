import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      sticky="top"
      expand="lg"
      // bg="red"
      variant="dark"
    >
      <Navbar.Brand href="/">Scott Fabini</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/experiments">Experiments</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
