import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import './Portfolio.css';
import Title from './Title';

function Portfolio() {

    return (
        <section id="portfolio" className="wrapper-div">
            <Title background="Portfolio" title="My Work"/>
            <Container>
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="d-flex justify-content-center my-5">
                <Tab eventKey="all" title="All">
                    
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
