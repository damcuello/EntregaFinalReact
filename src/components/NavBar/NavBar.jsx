import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../Cart/CartWidget'

const NavBar = () => {
  return (
    <Navbar bg="color" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Tienda del Buhonero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown" to="/">
              <NavDropdown.Item as={Link} to="/productos/refrigeracion">Refrigeración Líquida</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/memorias">Memorias RAM</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/tarjetas">Placas de Video</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar