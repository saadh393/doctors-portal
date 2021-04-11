/*  
💥 Title : ServiceCard
📃 Description : This is each service card
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Col } from 'react-bootstrap';
import '../../../styles/OurServices.css';

const ServiceCard = ({ data }) => {
    const { image, title } = data;
    return (
        <>
            <Col md={4} className="serviceCardItem">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam reprehenderit
                </p>
            </Col>
        </>
    );
};

export default ServiceCard;
