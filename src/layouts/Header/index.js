import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Langauge from "../../components/Language";
import Search from "../../components/Search";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <NavLink className="nav-link" to="/">
            <img
              src="/assets/images/logo.svg"
              alt="logo"
              width="32"
              height="32"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                HOME
              </NavLink>
              <NavLink className="nav-link" to="/politics">
                POLITICS
              </NavLink>
              <NavLink className="nav-link" to="/sports">
                SPORTS
              </NavLink>
              <NavLink className="nav-link" to="/entertainment">
                ENTERTAINMENT
              </NavLink>
            </Nav>
            <Nav className="text-xl-end">
              <Search />
            </Nav>
            <Nav className="text-xl-end">
              <Langauge />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
