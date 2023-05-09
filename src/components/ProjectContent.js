import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectContent.css'
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectContent({params}) {
    const listAchievements = params.achievements
    return (
        <Container className="projectContentContainer">
            <Row className={"projectContentRow"}>
                <Col xl={5} className={"contentTitleColumn"}>
                    <h1 className="contentTitle">My Role</h1>
                </Col>
                <Col xl={7} className={"contentColumn"}>
                    <Row className={'projectContentSubRow'}>
                        <Col>
                            <h2 className="contentSectionTitle">Overview</h2>
                            <h2 className="contentSection">{params.overview}</h2>
                        </Col>
                    </Row>
                    <Row className={'projectContentSubRow'}>
                        <Col>
                            <h2 className="contentSectionTitle">Achievements</h2>
                            <ListGroup className="contentList" variant="flush">
                                {listAchievements.map((listItem) =>
                                    <ListGroup.Item className={"contentSectionBullet"}> {"\u2022 "} {listItem}</ListGroup.Item>)}
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={"projectContentRow"}>
                <Col xl={5} className={"contentTitleColumn"}>
                    <h1 className="contentTitle">Conclusion</h1>
                </Col>
                <Col xl={7} className={"contentColumn"}>
                    <Row>
                        <Col>
                            <h2 className="contentSectionTitle">Impact</h2>
                            <h2 className="contentSection">{params.impact}</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectContent;