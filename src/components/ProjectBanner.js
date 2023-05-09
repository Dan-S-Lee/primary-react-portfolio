import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectBanner.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectBanner({params}) {
    return (
        <Container fluid className={"ProjectBannerContainer"}>
            <Row>
                <Col className={"ProjectImageCol"}>
                    <img src={params.BannerImgRef} className="projectBannerImage"
                         alt="Banner"/>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectBanner;
