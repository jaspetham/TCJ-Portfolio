import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Service.css';
import Title from './Title';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPalette, faDesktop, faPencilRuler, faPaintBrush, faChartArea, faBullhorn} from '@fortawesome/free-solid-svg-icons';

function Service() {
    return (
        <section id="service" className="wrapper-div"> 
            <Container>
                <Title background="Services" title="What I Do" />
                <Row>
                    <Col lg="6">
                        <div className="box mb-5">
                            <div className="box-icon shadow-sm">
                                <FontAwesomeIcon icon={faPalette} id="icon"/>
                            </div>
                            <h3>Graphic Design</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est hic iusto reprehenderit dolore ipsa explicabo sequi ipsum, iure, reiciendis nihil omnis quod quae repellat exercitationem dolor beatae? Delectus, eaque aspernatur!</p>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="box mb-5 my-auto">
                            <div className="box-icon shadow-sm">
                                <FontAwesomeIcon icon={faDesktop} id="icon"/>
                            </div>
                            <h3>Web Design</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est hic iusto reprehenderit dolore ipsa explicabo sequi ipsum, iure, reiciendis nihil omnis quod quae repellat exercitationem dolor beatae? Delectus, eaque aspernatur!</p>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="box mb-5 my-auto">
                            <div className="box-icon shadow-sm">
                                <FontAwesomeIcon icon={faPencilRuler} id="icon"/>
                            </div>
                            <h3>UI/UX Design</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est hic iusto reprehenderit dolore ipsa explicabo sequi ipsum, iure, reiciendis nihil omnis quod quae repellat exercitationem dolor beatae? Delectus, eaque aspernatur!</p>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="box mb-5 my-auto">
                            <div className="box-icon shadow-sm">
                                <FontAwesomeIcon icon={faPaintBrush} id="icon"/>
                            </div>
                            <h3>App Design & Develop</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est hic iusto reprehenderit dolore ipsa explicabo sequi ipsum, iure, reiciendis nihil omnis quod quae repellat exercitationem dolor beatae? Delectus, eaque aspernatur!</p>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="box mb-5 my-auto">
                            <div className="box-icon shadow-sm">
                                <FontAwesomeIcon icon={faChartArea} id="icon"/>
                            </div>
                            <h3>Business Analysis</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est hic iusto reprehenderit dolore ipsa explicabo sequi ipsum, iure, reiciendis nihil omnis quod quae repellat exercitationem dolor beatae? Delectus, eaque aspernatur!</p>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="box mb-5 my-auto">
                            <div className="box-icon shadow-sm">
                                <FontAwesomeIcon icon={faBullhorn} id="icon"/>
                            </div>
                            <h3>SEO Marketing</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est hic iusto reprehenderit dolore ipsa explicabo sequi ipsum, iure, reiciendis nihil omnis quod quae repellat exercitationem dolor beatae? Delectus, eaque aspernatur!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Service
