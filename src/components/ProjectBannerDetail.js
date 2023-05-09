import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectBannerDetail.css'
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectBannerDetail({params}) {
    return (
        <Container className="projectBannerDetailContainer">
            <Row className={"projectBannerDetailRow"}>
                <Col lg={2}>
                    <h2 className="bannerDetailTitle">Role</h2>
                    <h2 className="bannerDetail">{params.role}</h2>
                </Col>
                <Col lg={{span: 2, offset: 3}}>
                    <h2 className="bannerDetailTitle">Tools</h2>
                    <h2 className="bannerDetail">{params.tools}</h2>
                </Col>
                <Col lg={{span: 2, offset: 3}}>
                    <h2 className="bannerDetailTitle">Timeline</h2>
                    <h2 className="bannerDetail">{params.timeline}</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectBannerDetail;