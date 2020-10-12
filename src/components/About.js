import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import './About.css'
import Title from './Title'
import portfolio from '../assets/tcj_portfolio.pdf'

function About() {
    return (
        <section id="about" className="container-div"> 
            <Container>
                <Title background="About Me" title="Get to Know Me" />
                <Row>
                    <Col lg="8" className="text-center text-lg-left my-auto">
                        <h2 className="about-title mb-3">I'm <span className="highlight">Tan Chang Jen,</span> a Game Developer</h2>
                        <p>Skilled in using Unity and 3DsMax, work on a personal project on 3D Modeling and 
develop individual game before.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore voluptate reprehenderit corporis atque adipisci, molestiae eius, similique non ipsa excepturi ducimus dolores numquam, autem quis a repudiandae cumque quo!</p>
                    </Col>
                    <Col lg="4" className="mt-5 mt-lg-0">
                        <div className="pl-4">
                            <ul>
                                <li>
                                    <span className="about-list mr-2">Name: </span> Tan Chang Jen
                                </li>
                                <li>
                                    <span className="about-list mr-2">Email: </span> ChangJenTan@gmail.com
                                </li>
                                <li>
                                    <span className="about-list mr-2">Age: </span> 69
                                </li>
                                <li>
                                    <span className="about-list mr-2">From: </span> North Korea
                                </li>
                            </ul>
                            <div className="text-center text-md-left">
                                <a href={portfolio} target="_blank" className="btn custom-btn">Download CV</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
