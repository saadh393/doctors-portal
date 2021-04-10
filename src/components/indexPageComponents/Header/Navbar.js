/*  
💥 Title : Navbar
📃 Description : This will contain the navigation Menu
✍ Author : Saad Hasan
⌚ Date : 10/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import style from '../../../styles/Navbar.module.css';

const Navbar = () => (
    <>
        <nav>
            <ul className={style.menu}>
                <li>Home</li>
                <li>About</li>
                <li>Dental Services</li>
                <li className="text-white">Reviews</li>
                <li className="text-white">Blog</li>
                <li className="text-white">Contact Us</li>
            </ul>
        </nav>
    </>
);

export default Navbar;
