import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './Resume.css';
import Title from './Title';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Resume() {
    return (
        <section id="resume" className="wrapper-div"> 
            <Container>
                <Title background="Summary" title="Resume"/>
                <Row>
                    <Col md="6">
                        <h2 className="summary-title mb-4">My Education</h2>
                        <div className="summary-card p-4 border bg-white mb-4">
                            <p className="summary-date">2000 - 2004</p>
                            <h3 className="summary-rank">
                                Computer Science
                            </h3>
                            <p className="summary-location">
                                Internation University
                            </p>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae voluptates temporibus excepturi a possimus corrupti aliquam quo, vitae fuga pariatur! Quidem velit nam quaerat at nesciunt veniam doloremque cumque.
                            </p>
                        </div>

                        <div className="summary-card p-4 border bg-white mb-4">
                            <p className="summary-date">2000 - 2004</p>
                            <h3 className="summary-rank">
                                Bachelor Degree
                            </h3>
                            <p className="summary-location">
                                University of Mr World Wide
                            </p>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae voluptates temporibus excepturi a possimus corrupti aliquam quo, vitae fuga pariatur! Quidem velit nam quaerat at nesciunt veniam doloremque cumque.
                            </p>
                        </div>
                    </Col>

                    <Col md="6">
                        <h2 className="summary-title mb-4">My Experience</h2>
                        <div className="summary-card p-4 border bg-white mb-4">
                            <p className="summary-date">2000 - 2004</p>
                            <h3 className="summary-rank">
                                Jr. UI UX Designer
                            </h3>
                            <p className="summary-location">
                                Themeforest
                            </p>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae voluptates temporibus excepturi a possimus corrupti aliquam quo, vitae fuga pariatur! Quidem velit nam quaerat at nesciunt veniam doloremque cumque.
                            </p>
                        </div>

                        <div className="summary-card p-4 border bg-white mb-4">
                            <p className="summary-date">2000 - 2004</p>
                            <h3 className="summary-rank">
                                Pimp Master 69
                            </h3>
                            <p className="summary-location">
                                Mom's Basement
                            </p>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae voluptates temporibus excepturi a possimus corrupti aliquam quo, vitae fuga pariatur! Quidem velit nam quaerat at nesciunt veniam doloremque cumque.
                            </p>
                        </div>
                    </Col>
                </Row>

                <h2 className="my-4 skills-title">My Skills</h2>
                <Row>
                    <Col md="6" className="skills-div">
                        <p className="skills-text text-left mb-2 text-dark">Game Design
                            <span className="float-right">
                                65%
                            </span>
                        </p>
                        <ProgressBar now={65} className="mb-4"/>

                        <p className="skills-text text-left mb-2 text-dark">C#
                            <span className="float-right">
                                70%
                            </span>
                        </p>
                        <ProgressBar now={70} className="mb-4"/>

                        <p className="skills-text text-left mb-2 text-dark">Unity Engine
                            <span className="float-right">
                                100%
                            </span>
                        </p>
                        <ProgressBar now={100} className="mb-4"/>
                    </Col>
                    <Col md="6" className="skills-div">
                        <p className="skills-text text-left mb-2 text-dark">Python
                            <span className="float-right">
                                65%
                            </span>
                        </p>
                        <ProgressBar now={65} className="mb-4"/>

                        <p className="skills-text text-left mb-2 text-dark">Illustration
                            <span className="float-right">
                                70%
                            </span>
                        </p>
                        <ProgressBar now={70} className="mb-4"/>

                        <p className="skills-text text-left mb-2 text-dark">Sprite Design
                            <span className="float-right">
                                100%
                            </span>
                        </p>
                        <ProgressBar now={100} className="mb-4"/>
                    </Col>
                </Row>

                <div className="text-center mt-5 cv-div">
                    <a href="#" className="btn custom-btn">Download CV
                    {/* <span className="float-right ml-2">
                        <FontAwesomeIcon icon={faDownload} id="icon"/>
                    </span> */}
                    </a>
                </div>
            </Container>
        </section>
    )
}

export default Resume
