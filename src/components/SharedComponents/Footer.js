/*  
💥 Title : Footer
📃 Description : This is common Footer will be used is common some pages
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Col, Container, Row } from 'react-bootstrap';
import '../../styles/Footer.css';

const Footer = () => (
    <>
        <footer>
            <Container>
                <Row>
                    <Col />
                    <Col>
                        <h4>Services</h4>
                    </Col>
                    <Col>
                        <h4>Services</h4>
                    </Col>
                    <Col>
                        <h4>Services</h4>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ul>
                            <li> Emergency Dental Care </li>
                            <li> Check Up </li>
                            <li> Treatment of Personal Diseases </li>
                            <li> Tooth Extraction </li>
                            <li> Check Up </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li> Emergency Dental Care </li>
                            <li> Check Up </li>
                            <li> Treatment of Personal Diseases </li>
                            <li> Tooth Extraction </li>
                            <li> Check Up </li>
                            <li> Tooth Extraction </li>
                            <li> Tooth Extraction </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li> Emergency Dental Care </li>
                            <li> Check Up </li>
                            <li> Treatment of Personal Diseases </li>
                            <li> Tooth Extraction </li>
                            <li> Check Up </li>
                            <li> Tooth Extraction </li>
                            <li> Tooth Extraction </li>
                        </ul>
                    </Col>
                    <Col>
                        <p>New York - 1000 Hudson Yars</p>
                        <br />
                        <strong> Call Now </strong>
                        <br />
                        <button type="button" className="btn-primary">
                            {' '}
                            +22132341341234
                        </button>
                    </Col>
                </Row>
            </Container>
            <p className="text-center mt-5">Copyright 2020 All RIghts Reserved</p>
        </footer>
    </>
);

export default Footer;
