import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/assets/images/logo.svg"
              alt="logo"
              width="32"
              height="32"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">POLITICS</Nav.Link>
              <Nav.Link href="#link">SPORTS</Nav.Link>
              <Nav.Link href="#link">ENTERTAINMENT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;