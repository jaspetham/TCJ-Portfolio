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
            
        </div>
        
    )
}

export default ImageDemo
