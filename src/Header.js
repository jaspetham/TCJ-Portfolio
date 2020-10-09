import React from "react";
import { Container, Nav, Navbar, Image, Row, Col } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="position-relative">
        <Row className="w-100">
          <Col className="col-10 col-md-3">
            <Navbar.Brand href="#home">
              <Image src="http://demo.harnishdesign.net/html/simone/images/logo-light.png" />
            </Navbar.Brand>
          </Col>

          <Navbar.Toggle>
            <span className="icon-bar top-bar"> </span>
            <span className="icon-bar middle-bar"> </span>
            <span className="icon-bar bottom-bar"> </span>
          </Navbar.Toggle>
          <Col className="col col-md-6 p-0">
            <Navbar.Collapse
              className="justify-content-center"
              id="navbarSupportedContent"
            >
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
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
