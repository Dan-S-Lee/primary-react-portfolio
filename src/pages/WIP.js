import React from "react";
import './WIP.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function WIP() {
    return (
        <Container fluid className="p-0">
            <NavBar />
            <Container>
                <div className={"row justify-content-center wip-row"}>
                    <div className="col-md-10 main-title">
                        <h1>Page under construction,</h1>
                        <h2> being onboarded to AWS.</h2>
                    </div>
                </div>
            </Container>
            <Footer />
        </Container>
    );
}

export default WIP;
