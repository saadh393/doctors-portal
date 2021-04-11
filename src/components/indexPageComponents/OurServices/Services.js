/*  
💥 Title : Services
📃 Description : This is Services Section
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Row } from 'react-bootstrap';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import teath from '../../../images/teath.png';
import '../../../styles/OurServices.css';
import ServiceCard from './ServiceCard';

// Data
const serviceData = [
    {
        image: fluoride,
        title: 'Fluoride Treatment',
    },
    {
        image: cavity,
        title: 'Cavity Filling',
    },
    {
        image: teath,
        title: 'Teath Whitening',
    },
];

const Services = () => (
    <>
        <section className="ourServiesContainer text-center">
            <strong>
                <h4>OUR SERVICES</h4>
            </strong>
            <h1>Services We Provide</h1>
            <Row className="services">
                {serviceData.map((data) => (
                    <ServiceCard data={data} />
                ))}
            </Row>
        </section>
    </>
);

export default Services;
