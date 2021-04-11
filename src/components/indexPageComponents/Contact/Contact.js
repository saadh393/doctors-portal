/*  
💥 Title : Contact
📃 Description : Contact Us Form 
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Container } from 'react-bootstrap';
import '../../../styles/Contact.css';

const Contact = () => (
    <>
        <section className="contactWrapper mt-6r">
            <Container>
                <h4>CONTACT US</h4>
                <h1 className="contact-h1">Always Connect with Us</h1>
                <form
                    className="mt-5 w-75 d-flex flex-column justify-content-center"
                    style={{ margin: '0 auto' }}
                >
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Subject"
                        required
                    />
                    <textarea type="text" className="form-control mt-2" rows="5" />
                    <input
                        type="submit"
                        className="btn-primary mt-2"
                        style={{ margin: '0 auto' }}
                    />
                </form>
            </Container>
        </section>
    </>
);

export default Contact;
