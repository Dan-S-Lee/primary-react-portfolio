import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutBanner.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AboutBanner() {
    return (
        <Container>
            <Row className={"aboutBannerRow"}>
                <Col md={6} className={"aboutTitleCol"}>
                    <Row>
                        <Col className={"aboutNameDiv"}>
                            <p className="aboutJobName">
                                Lauren Hurr
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"aboutJobDiv"}>
                            <p className="aboutJobTitle">
                                Product Designer
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"detailDiv"}>
                            <Row>
                                <Col>
                                    <p className="aboutDetails">
                                        Daniel is a software engineer with 6 years of experience in the financial
                                        services industry.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="aboutDetails">
                                        Daniel is a software engineer specializing in data science, machine learning,
                                        and AI. He holds a
                                        Masters in Data Science from the University of Chicago and has worked at
                                        Capital One as a software engineer and S&P Global as an analyst. His skills in programming
                                        and data analysis have enabled him to develop innovative solutions that drive
                                        business growth and improve customer experience. He is passionate about staying
                                        up-to-date with the latest trends and technologies in the field, and is
                                        constantly seeking opportunities to grow and learn as a software engineer.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col md={6} className={"aboutDescCol"}>
                    <div className={"imageDiv"}>
                        <img className="aboutProfilePic" src={"images/headshot.png"} alt={"AboutMePhoto"}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutBanner;
