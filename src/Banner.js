import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typing from "react-typing-animation";
import "./Banner.css";

function Banner() {
  return (
    <section id="home">
      <div className="banner-wrap">
        <div className="banner-mask"></div>
        <div className="banner-bg"></div>
        <div className="banner-content  d-flex">
          <Container fluid className="my-auto">
            <Row>
              <Col className="text-center text-white p-0">
                <p className="title mb-md-3">Welcome</p>
                <h2 className="name mb-md-">
                  <span>I'm </span>
                  <Typing speed={100} loop={true} className="type-animation">
                    Tan Chang Jen
                    <Typing.Backspace count={20} speed={100} />
                    a Game Developer
                    <Typing.Backspace count={20} speed={100} />
                  </Typing>
                </h2>
                <p className="location mb-md-">Based in KK</p>
                <a href="#" className="btn custom-btn rounded mt-2">
                  Hire me
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Banner;
