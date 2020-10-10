import React from 'react';
import { Container } from 'react-bootstrap';
import './Service.css';
import Title from './Title';

function Service() {
    return (
        <section id="service" className="container-div"> 
            <Container>
                <Title background="Services" title="What I Do" />
                <Row>
                    <Col lg="6">
                        <div className="box">
                            <div className="box-icon">

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Service
