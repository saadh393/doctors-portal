/*  
💥 Title : CardBookAppoi
📃 Description : Booking APpointment Card Item
✍ Author : Saad Hasan
⌚ Date : 12/ April/ 2021 
*/

import { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import ModalAppointment from '../ModalAppointment/ModalAppointment';

/*  🔥 React Dependencies 🔥 */

const CardBookAppoi = ({ data }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <Col md={4}>
                <Card className="p-3 mb-4">
                    <div className="card-body text-center">
                        <h3 className="card-titile text-primary">{data.title}</h3>
                        <h6>{data.time}</h6>
                        <p>{data.des}</p>
                        <Button onClick={openModal} className="btn-primary">
                            BOOK APPPOINTMENT
                        </Button>
                        <ModalAppointment
                            title={data.title}
                            openModal={openModal}
                            closeModal={closeModal}
                            modalIsOpen={modalIsOpen}
                        />
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default CardBookAppoi;
