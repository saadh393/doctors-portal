/*  
💥 Title : AppointmentMain
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import charImage from '../../../images/charimage.png';

const mainHeaderStyle = {
    mainSection: {
        height: '520px',
    },
    leftCol: {
        lineHeight: '2.2',
    },
};

const AppointmentMain = ({ handleAppointmentDate, value }) => (
    <>
        <main className="row d-flex align-items-center" style={mainHeaderStyle.mainSection}>
            <Col md={5} style={mainHeaderStyle.leftCol}>
                <h1>
                    <strong>Appointment</strong>
                </h1>
                <br />
                <Calendar onChange={handleAppointmentDate} value={value} />
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
                <img src={charImage} className="img-fluid" />
            </Col>
        </main>
    </>
);

export default AppointmentMain;
