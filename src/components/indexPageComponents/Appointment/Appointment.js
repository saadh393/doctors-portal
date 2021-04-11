/*  
💥 Title : Appointment
📃 Description : This is the Appointment Section of 2 Columns
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Col, Row } from 'react-bootstrap';
import doctorImage from '../../../images/doctor.png';
import '../../../styles/Appointment.css';

const Appointment = () => (
    <>
        <Row className="mt-7r appointmentWrapper">
            <Col className="doctorImage">
                <img src={doctorImage} alt="Doctor Giving Pose" />
            </Col>
            <Col className="appontmentInfo">
                <h3 className="text-primary">APPOINTMENT</h3>
                <h1 className="text-white">
                    Make an Appointment <br /> Today
                </h1>
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque eaque
                    quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque
                    eaque quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                    itaque eaque quis!
                </p>
                <button type="button" className="btn btn-primary">
                    Learn More{' '}
                </button>
            </Col>
        </Row>
    </>
);

export default Appointment;
