/*  
💥 Title : Appointment
📃 Description : This will hold all the components accociate with Appointment Page
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../SharedComponents/Footer';
import Navbar from '../SharedComponents/Navbar';
import AppointmentMain from './AppointmentMain/AppointmentMain';
import BookAppointment from './BookAppointment/BookAppointment';

/*  🔥 React Dependencies 🔥 */

const Appointment = () => {
    const [value, onChange] = useState(new Date());
    const handleAppointmentDate = (date) => onChange(date);

    return (
        <>
            <Container>
                <Navbar />
                <AppointmentMain value={value} handleAppointmentDate={handleAppointmentDate} />
                <BookAppointment value={value} />
            </Container>

            <Footer />
        </>
    );
};

export default Appointment;
