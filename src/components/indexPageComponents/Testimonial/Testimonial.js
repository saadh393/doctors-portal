/*  
💥 Title : Testimonial
📃 Description : This is the Testimonial Section
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import user1 from '../../../images/user1.png';
import user2 from '../../../images/user2.png';
import user3 from '../../../images/user3.png';
import '../../../styles/Testimonial.css';
import TestimonialCard from './TestimonialCard';

const testimonialInfo = [
    {
        name: 'Winson Herry',
        location: 'Califonia',
        image: user1,
        description:
            'It is a long testabilishment fact that by the readable content of a lot layout. THe point of using Lorem a more-or-less normal distribute to using `Content here, content',
    },
    {
        name: 'Winson Herry',
        location: 'Califonia',
        image: user2,
        description:
            'It is a long testabilishment fact that by the readable content of a lot layout. THe point of using Lorem a more-or-less normal distribute to using `Content here, content',
    },
    {
        name: 'Winson Herry',
        location: 'Califonia',
        image: user3,
        description:
            'It is a long testabilishment fact that by the readable content of a lot layout. THe point of using Lorem a more-or-less normal distribute to using `Content here, content',
    },
];

const Testimonial = () => (
    <section className="testimonial-wrapper mt-6r">
        <div className="testimonial-header">
            <h4>TESTIMONIAL</h4>
            <h1 style={{ fontSize: '3.6rem' }}>
                Whats Our Patients <br /> Says
            </h1>
        </div>

        <div className="testimonial-cards row  mt-5">
            {testimonialInfo.map((info) => (
                <TestimonialCard data={info} />
            ))}
        </div>
    </section>
);

export default Testimonial;
