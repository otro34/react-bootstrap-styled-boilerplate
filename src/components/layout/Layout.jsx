import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header'

const Layout = (props) => {

    return (<Container fluid>
        <Row xs={1} className="justify-content-md-center">
            <Col >
                <Header></Header>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col>
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default Layout