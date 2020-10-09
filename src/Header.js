import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="position-relative">
        <Navbar.Brand href="#home">
          <Image src="http://demo.harnishdesign.net/html/simone/images/logo-light.png" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-center">
          <Nav className="nav-menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Nav.Link href="#home">Home</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#about">About</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#">What I do</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#">Resume</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#">Portfolio</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#">Contact</Nav.Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
