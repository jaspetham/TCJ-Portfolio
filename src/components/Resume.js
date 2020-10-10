import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Resume.css';
import Title from './Title';

function Resume() {
    return (
        <section id="resume" className="wrapper-div"> 
            <Container>
                <Title background="Summary" title="Resume"/>
                <Row>
                    <Col md="6">
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Resume
