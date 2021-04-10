/*  
💥 Title : BusinessInfo
📃 Description : Here 3 Business info card will be shown
✍ Author : Saad Hasan
⌚ Date : 10/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { faClock, faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'react-bootstrap';
import BusinessInfoItem from './BusinessInfoItem';

const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Opening Hours',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eos!',
            icon: faClock,
            background: 'light',
        },
        {
            title: 'Visit  Our Location',
            description: 'Brooklyn, NY, United States',
            icon: faLocationArrow,
            background: 'dark',
        },
        {
            title: 'Contact Us Now',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eos!',
            icon: faPhoneAlt,
            background: 'light',
        },
    ];
    return (
        <>
            <Row>
                {infoData.map((data) => (
                    <BusinessInfoItem infoData={data} />
                ))}
            </Row>
        </>
    );
};

export default BusinessInfo;
