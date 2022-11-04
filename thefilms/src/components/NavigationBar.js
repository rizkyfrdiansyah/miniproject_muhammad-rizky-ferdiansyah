import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">THEFILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDIES</Nav.Link>
            <Nav.Link href="#superhero">SUPERHEROES</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
