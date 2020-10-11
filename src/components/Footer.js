import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <footer id="footer">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <p className="footer-text mb-3 mb-lg-0">Website Design by <a href="https://www.jaspertham.com"> Jasper Tham</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
