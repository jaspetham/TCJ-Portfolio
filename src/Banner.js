import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import Typical from 'react-typical'

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
                  <Typical
                    className="type-animation"
                   steps={['Tan Chang Jen', 1000, 'a Game Developer', 500]}
                   loop={Infinity}
                   wrapper="p"/>
                </h2>
                <p className="location mb-md-">Based in KK</p>
                <a href="#" className="btn custom-btn mt-2">
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
