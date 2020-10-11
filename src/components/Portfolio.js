import React, { useState, useCallback } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import './Portfolio.css';
import Title from './Title';
import ImageDemo from './ImageDemo';

function Portfolio() {
    return (
        <section id="portfolio" className="wrapper-div">
            <Title background="Portfolio" title="My Work"/>
            <Container>
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="d-flex justify-content-center my-5">
                <Tab eventKey="all" title="All">
                <Container>
                <div className="card-columns">
                    <div className="card">
                        <ImageDemo 
                            title="your tho" 
                            infoText="Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure." 

                            url="www.example.com" 
                            src="http://demo.harnishdesign.net/html/simone/images/projects/project-2.jpg" 
                            alt="big pp"
                        />  
                    </div>
                    <div className="card">
                        <ImageDemo 
                            title="your tho" 
                            infoText="Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure." 
                            url="www.example.com" 
                            src="http://demo.harnishdesign.net/html/simone/images/projects/project-1.jpg" 
                            alt="big pp"
                        />  
                    </div>
                    <div className="card">
                        <ImageDemo 
                            title="your tho" 
                            infoText="Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."  
                            url="www.example.com" 
                            src="http://demo.harnishdesign.net/html/simone/images/projects/project-1.jpg" 
                            alt="big pp"
                        />  
                    </div>
                </div>
                </Container>
                </Tab>
                <Tab eventKey="design" title="Design">
                    
                </Tab>
                <Tab eventKey="photo" title="Photo">
                    <p>photo</p>
                </Tab>
            </Tabs>
            </Container>
        </section>
    )
}
export default Portfolio
