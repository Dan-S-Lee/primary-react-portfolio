import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectHeadline.css'
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectHeadline({params}) {
    return (
        <Container className="projectHeadlineContainer">
            <Row className={"headlineRow"}>
                <Col xl={12}>
                    <h2 className="projectName">{params.projectName}</h2>
                </Col>
            </Row>

        </Container>
    );
}

export default ProjectHeadline;