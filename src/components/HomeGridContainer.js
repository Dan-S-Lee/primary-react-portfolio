import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeGridContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HomeProjectCard from "./HomeProjectCard";

const HomeGridContainer = () => {
        const projectList = [
            { projectName: 'Capital One',
                projectDesc: 'Software Engineer - 2022 - Present',
                caseStudyHref: "capitalone",
                caseStudyImgRef: "images/bigbank_thumb.png"},
            { projectName: 'S&P Global',
                projectDesc: 'Associate - 2017 - 2022',
                caseStudyHref: "spglobal",
                caseStudyImgRef: "images/biggerusbank_thumb.png"},
            { projectName: 'Chat Disentanglement',
                projectDesc: 'Capstone Student - 2022 - 2023',
                caseStudyHref: "capstone",
                caseStudyImgRef: "images/chat_thumb.png"},
            { projectName: 'NYC COVID Dashboard',
                projectDesc: 'Personal Project - 2022',
                caseStudyHref: "nyccovid",
                caseStudyImgRef: "images/nyc_covid_thumb.png"}
        ];

    return (
        <Container fluid className={"no-padding"}>
            <Container fluid>
                <Row className={"homeGridHeaderRow"}>
                    <Col className={"homeGridHeader"}>
                        <h1 className={"homeGridHeaderText"}>
                            Selected Work
                        </h1>
                    </Col>
                </Row>
                <Row className="homeGridProjectRow">
                    <Col md={6} className="homeGridProjectCol">
                        <div className="vr-line"></div>
                        <div className="hr-line"></div>
                        <HomeProjectCard params = {projectList[0]}/>
                    </Col>
                    <Col md={6} className="homeGridProjectCol">
                        <div className="hr-line"></div>
                        <HomeProjectCard params = {projectList[1]}/>
                    </Col>
                </Row>
                <Row className={"homeGridProjectRow"}>
                    <Col md={6} className={"homeGridProjectCol"}>
                        <div className="vr-line"></div>
                        <div className="hr-line"></div>
                        <HomeProjectCard params = {projectList[2]}/>
                    </Col>
                    <Col md={6} className={"homeGridProjectCol"}>
                        <div className="hr-line"></div>
                        <HomeProjectCard params = {projectList[3]}/>
                    </Col>
                </Row>
            </Container>

        </Container>
    );
}

export default HomeGridContainer;