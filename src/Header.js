import React from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Image,
  ListGroup,
} from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Row className="w-100">
          <Col lg="2" className="text-left text-white sticky">
            <Navbar.Brand href="#home">
              <Image src="http://demo.harnishdesign.net/html/simone/images/logo-light.png" />
            </Navbar.Brand>
          </Col>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Col lg="8" className="px-auto">
            <Navbar.Collapse className="justify-content-center">
              <Nav className="nav-menu">
                <ListGroup as="ul" horizontal>
                  <ListGroup.Item as="li">
                    <Nav.Link href="#home">Home</Nav.Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <Nav.Link href="#about">About</Nav.Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <Nav.Link href="#">What I Do</Nav.Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <Nav.Link href="#">Resume</Nav.Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <Nav.Link href="#">Portfolio</Nav.Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <Nav.Link href="#">Contact</Nav.Link>
                  </ListGroup.Item>
                </ListGroup>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
