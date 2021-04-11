/*  
💥 Title : Home
📃 Description : This is the home page. and It will contain all the home page compponents
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Container } from 'react-bootstrap';
import Appointment from './Appointment/Appointment';
import DentalCare from './DentalCare/DentalCare';
import Header from './Header/Header';
import Services from './OurServices/Services';
import Testimonial from './Testimonial/Testimonial';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from '../SharedComponents/Footer';

const Home = () => (
    <>
        <Header />
        <Container>
            <Services />
            <DentalCare />
        </Container>
        <Appointment />
        <Container>
            <Testimonial />
            <Blog />
        </Container>
        <Contact />
        <Footer />
    </>
);

export default Home;
