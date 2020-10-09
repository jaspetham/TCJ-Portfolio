import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";

function Banner() {
  return (
    <section id="home">
      <div className="banner-wrap">
        <div className="banner-mask"></div>
        <div className="banner-bg"></div>
        <div className="banner-content  d-flex">
          <Container className="my-auto">
            <Row>
              <Col className="text-center text-white">
                <p className="title mb-md-3">Welcome</p>
                <h2 className="name mb-md-">I'm Tan Chang Jen</h2>
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
