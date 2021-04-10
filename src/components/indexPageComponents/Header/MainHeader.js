/*  
💥 Title : MainHeader
📃 Description : This will be the main header, and contain 2 columns of Some text and an Image
✍ Author : Saad Hasan
⌚ Date : 10/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Button, Col } from 'react-bootstrap';
import charImage from '../../../images/charimage.png';

const mainHeaderStyle = {
    mainSection: {
        height: '520px',
    },
    leftCol: {
        lineHeight: '2.2',
    },
};

const MainHeader = () => (
    <>
        <main className="row d-flex align-items-center" style={mainHeaderStyle.mainSection}>
            <Col md={5} style={mainHeaderStyle.leftCol}>
                <h1>
                    <strong>
                        Your New Smile <br /> Starts Here
                    </strong>
                </h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed sequi
                    omnis culpa maiores ad possimus.
                </p>
                <Button> GET APPOINTMENT </Button>
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
                <img src={charImage} className="img-fluid" />
            </Col>
        </main>
    </>
);

export default MainHeader;
