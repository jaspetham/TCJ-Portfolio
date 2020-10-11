import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ImageDemo.css'

function ImageDemo(props) {
    return (
        
        
        <div className="demo-box">
            <img id="myImg" className="img-fluid d-block" src={props.src} alt={props.alt}/>
            <div className="overlay">
                <div className="text">
                    <p className="text-capitalize">{props.title}</p>
                    <a href={props.url} className="btn btn-demo">Demo</a>
                </div>
            </div>
            <div id="myModal" className="modal">
                
                <Container className="image-box">
                    <span className="close">&times;</span>
                    <h3 className="box-title text-center mb-3">{props.title}</h3>
                    <Row>
                        <Col lg="7">
                            <img className="modal-content img-fluid" id="img01"/>
                        </Col>
                        <Col lg="5">
                            <div className="caption-box text-left">
                                <h5 className="box-title">Project Info: </h5>
                                <p className="box-text">{props.infoText}</p>
                                <h5 className="box-title mt-4">Project Details: </h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <span className="box-title2 mr-2">Technologies : </span> 
                                        {props.technology}
                                    </li>
                                    <li>
                                        <span className="box-title2 mr-2">Date : </span> 
                                        {props.date}
                                    </li>
                                    <li>
                                        <span className="box-title2 mr-2">URL : </span> 
                                        <a href={props.url} target="_blank">{props.url}</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        
    )
}

export default ImageDemo
