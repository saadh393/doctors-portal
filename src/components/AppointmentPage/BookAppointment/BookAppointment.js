/*  
💥 Title : BookAppointment
📃 Description : Book 
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

import { Row } from 'react-bootstrap';
import CardBookAppoi from './CardBookAppoi';

/*  🔥 React Dependencies 🔥 */

const BookAppointment = ({ value }) => {
    const data = [
        {
            _id: 1,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            des: '10 SPACES AVAILABLE',
        },
        {
            _id: 2,
            title: 'Cosmetic Dentistry',
            time: '8:00 AM - 9:00 AM',
            des: '10 SPACES AVAILABLE',
        },
        {
            _id: 3,
            title: 'Teeth Cleaning',
            time: '8:00 AM - 9:00 AM',
            des: '10 SPACES AVAILABLE',
        },
        {
            _id: 4,
            title: 'Cavity Protection',
            time: '8:00 AM - 9:00 AM',
            des: '10 SPACES AVAILABLE',
        },
        {
            _id: 5,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            des: '10 SPACES AVAILABLE',
        },
        {
            _id: 6,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            des: '10 SPACES AVAILABLE',
        },
    ];
    return (
        <>
            <section className="mt-6r">
                <h1 className="text-primary text-center mb-5">
                    Available Appointments on {value.toDateString()}
                </h1>
                <Row className="mb-3">
                    {data.map((appointment) => (
                        <CardBookAppoi data={appointment} />
                    ))}
                </Row>
            </section>
        </>
    );
};

export default BookAppointment;
