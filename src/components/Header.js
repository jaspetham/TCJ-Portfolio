import React, {useState} from "react";
import { Container, Nav, Navbar, Image, Row, Col } from "react-bootstrap";
import "./Header.css";
import Scrollspy from 'react-scrollspy'

function Header() {
  const [navbar,setNavbar]= useState(false);
  const changeBackground = ()=>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <Navbar id="navbar" bg="light" expand="lg" className={navbar? 'navbar changeBackground' : 'navbar'}>
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
                <Scrollspy items={ ['home','about','service','resume','portfolio'] } currentClassName="active" offset={ -150 } className="navbar-nav" >
                    <li className="nav-item">
                      <a href="#home" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#service" className="nav-link">
                        What I Do
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#resume" className="nav-link">
                        Resume
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#portfolio" className="nav-link">
                        Portfolio
                      </a>
                    </li>
                  </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
