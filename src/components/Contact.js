import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';
import Title from './Title';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faFax, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF,faTwitter,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <section id="contact" className="wrapper-div">
            <Title background="Contact" title="Get in Touch"/>
            <Container>
                <Row>
                    <Col md="4" xl="3" className="text-center order-1 order-md-0 text-md-left mt-5 mt-md-0">
                        <h2 className="mb-3 text-uppercase contact-title">Address</h2>
                        <p className="contact-text mb-4">
                        4th Floor, Plot No.22,
                        <br/>
                        145 Murphy Canyon Rd.
                        <br/>
                        San Diego CA 2028
                        </p>
                        <p className="contact-text mb-1">
                            <span className="mr-2">
                                <FontAwesomeIcon icon={faPhoneAlt} id="icon"/>
                            </span>
                             (060) 444 434 444
                        </p>

                        <p className="contact-text mb-1">
                            <span className="mr-2">
                                <FontAwesomeIcon icon={faFax} id="icon"/>
                            </span>
                            (060) 555 545 555
                        </p>

                        <p className="contact-text mb-4">
                            <span className="mr-2">
                                <FontAwesomeIcon icon={faEnvelope} id="icon"/>
                            </span>
                            bigdaddy@gmail.com
                        </p>
                        <h2 className="mb-3 text-uppercase contact-title">Follow Me</h2>
                        <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
                            <li className="social-icons">
                                <a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            </li>

                            <li className="social-icons">
                                <a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                            </li>

                            <li className="social-icons">
                                <a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            </li>
                        </ul>
                    </Col>

                    <Col md="8" xl="9" className="order-0 order-md-1">
                    <h2 className="mb-3 text-uppercase contact-title">Email Me</h2>
                    <Form>
                        <Row>
                            <Col xl="6" className="form-column">
                                <Form.Group>
                                    <Form.Control required  name="name" type="text" placeholder="Enter Name" />
                                </Form.Group>
                            </Col>
                            <Col xl="6" className="form-column">
                                <Form.Group required controlId="formBasicEmail">
                                    <Form.Control name="email" type="email" placeholder="Enter Email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group required controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" name="form-message" rows="5" placeholder="Enter your message"/>
                        </Form.Group>
                        <p className="text-center mt-4 mb-0">
                        <Button className="btn submit-btn" type="submit">
                            Send Message
                        </Button>
                        </p>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
