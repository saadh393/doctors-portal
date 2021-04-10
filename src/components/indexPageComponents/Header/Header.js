/*  
💥 Title : Header
📃 Description : This will contain all the header component and finally this will be placed at the App.js
✍ Author : Saad Hasan
⌚ Date : 10/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Container } from 'react-bootstrap';
import '../../../styles/Header.module.css';
import BusinessInfo from './BusinessInfo';
import MainHeader from './MainHeader';
import Navbar from './Navbar';

const Header = () => (
    <>
        <header>
            <Container>
                <Navbar />
                <MainHeader />
                <BusinessInfo />
            </Container>
        </header>
    </>
);

export default Header;
