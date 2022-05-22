import { Container, Navbar, Nav } from 'react-bootstrap';
import Langauge from './Language';
import Search from './Search';

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
            <Nav className="text-md-end">
              <Search />
            </Nav>
            <Nav className="text-md-end">
              <Langauge />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;