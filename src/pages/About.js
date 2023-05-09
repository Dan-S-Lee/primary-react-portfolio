import React from "react";
import './About.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutBanner from "../components/AboutBanner";
function About() {
    return (
        <Container fluid className="p-0">
            <NavBar />
            <AboutBanner />
            <Footer />
        </Container>
    );
}

export default About;
