import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">NUTS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="/settings">
                Settings
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
