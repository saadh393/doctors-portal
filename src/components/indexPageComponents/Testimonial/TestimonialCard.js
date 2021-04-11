/*  
💥 Title : TestimonialCard
📃 Description : Each card of testimonial
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card, Col } from 'react-bootstrap';
import '../../../styles/Testimonial.css';

const TestimonialCard = ({ data }) => {
    const { description, name, location, image } = data;
    return (
        <>
            <Col>
                <Card className="testimonial-card-item">
                    <p>{description}</p>
                    <div className="testimonial-userinfo">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{location}</p>
                        </div>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default TestimonialCard;
