/*  
💥 Title : BusinessInfoItem
📃 Description : This is Each card of Bussiness Info
✍ Author : Saad Hasan
⌚ Date : 10/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import '../../../styles/BusinessInfoItem.css';

const BusinessInfoItem = ({ infoData }) => (
    <>
        <Col md={4}>
            <div className={`d-flex  text-white background-${infoData.background} infoWrapper`}>
                <FontAwesomeIcon icon={infoData.icon} size="3x" color="white" />
                <div style={{ color: '#fff' }}>
                    <h6>{infoData.title}</h6>
                    <small>{infoData.description}</small>
                </div>
            </div>
        </Col>
    </>
);

export default BusinessInfoItem;
