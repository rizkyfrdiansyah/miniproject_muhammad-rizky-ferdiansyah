import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <strong>Decashier</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row>
            <Col>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Navbar.Text>
                  <a href="/login">Login</a>
                </Navbar.Text>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
        <Nav></Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
