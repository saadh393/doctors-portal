/*  
💥 Title : Navbar
📃 Description : This will contain the navigation Menu
✍ Author : Saad Hasan
⌚ Date : 10/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Link } from 'react-router-dom';
import style from '../../styles/Navbar.module.css';

const Navbar = () => (
    <>
        <nav>
            <ul className={style.menu}>
                <li>Home</li>
                <Link to="/appointment">Appointment</Link>
                <li>Dental Services</li>
                <li>Reviews</li>
                <li className="text-white">Blog</li>
                <li className="text-white">Contact Us</li>
            </ul>
        </nav>
    </>
);

export default Navbar;
