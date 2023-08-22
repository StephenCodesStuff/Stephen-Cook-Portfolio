import React from "react";
import { Container, Row } from "react-bootstrap";
import Selfie from "../../assets/images/SelfieLightHouse.png";

const aboutMeStyles = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f7f7f7',
};

function About() {
    return (
        <Container className="d-flex justify-content-center align-item-center">
            <div style={aboutMeStyles}>
            <img src={Selfie} alt="Profile" style={{ width: 'auto', height: '400px', marginRight: '10px' }} />    
                <h2>About Me</h2>
                <p>Write a brief introduction about yourself here.</p>
                
            </div>

        </Container >
    );
}

export default About;