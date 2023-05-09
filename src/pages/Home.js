import React from "react";
import HomeBanner from '../components/HomeBanner';
import HomeGridContainer from "../components/HomeGridContainer";
import './Home.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
function Home() {
    return (
        <Container fluid className="p-0">
            <NavBar />
            <div className="Home">
                <HomeBanner />
                <HomeGridContainer />
            </div>
            <Footer />
        </Container>

    );
}

export default Home;
