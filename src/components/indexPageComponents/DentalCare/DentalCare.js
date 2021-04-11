/*  
💥 Title : DentalCare
📃 Description : Dental Care, There are two columns one for image and one for text
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Button } from 'react-bootstrap';
import child from '../../../images/child.png';
import '../../../styles/DentalCare.css';

const { Row, Col } = require('react-bootstrap');

const DentalCare = () => (
    <>
        <Row className="dentalCareWrapper">
            <Col>
                <img src={child} alt="" />
            </Col>

            <Col>
                <h1>
                    Exceptional Dental <br /> Care, on Your Terms
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, harum ullam?
                    Sed harum optio dolorem quas expedita maiores, a at. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Numquam, harum ullam? Sed harum optio dolorem quas
                    expedita maiores, a at. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Numquam, harum ullam? Sed harum optio dolorem quas expedita maiores, a at.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, harum ullam?
                    Sed harum optio dolorem quas expedita maiores, a at.
                </p>
                <Button> Learn More </Button>
            </Col>
        </Row>
    </>
);

export default DentalCare;
