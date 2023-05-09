import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeBanner.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function HomeBanner() {
    return (
        <Container fluid>
        <Row>
            <Col xl={6} md={12} className={"HomeBanner"}>
                <Container fluid className={"introContainer"}>
                    <p className="intro-headline">
                        <b>Daniel Lee</b> is a Software Engineer at Capital One.
                    </p>
                </Container>
            </Col>
        </Row>
        </Container>
    );
}

export default HomeBanner;
