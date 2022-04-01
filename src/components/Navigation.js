import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">Mein Cooler Webshop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    );
}

export default Navigation;