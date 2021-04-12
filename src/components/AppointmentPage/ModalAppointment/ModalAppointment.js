/*  
💥 Title : ModalAppointment
📃 Description : Modal Handling
✍ Author : Saad Hasan
⌚ Date : 12/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import '../../../styles/AppointmentModal.css';
import axios from 'axios';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '35%',
    },
};

Modal.setAppElement('#root');
const ModalAppointment = ({ closeModal, openModal, modalIsOpen, title, date }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [status, setStatus] = useState('');
    const onSubmit = (data) => {
        setStatus('Please Wait...');
        axios
            .post('http://localhost:4000/appointment', data)
            .then((response) => {
                if (response.data) {
                    setStatus('Your Appointment Data Stored Successfully');
                    setTimeout(() => {
                        closeModal();
                    }, 2000);
                } else {
                    setStatus('There was a server side error');
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3 className="text-primary text-center my-3">{title}</h3>
                <p className="text-center">On {date.toDateString()}</p>

                <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
                    <label>Dcotor Name </label>
                    <select {...register('doctors')}>
                        <option value="Doctor One">Doctor One</option>
                        <option value="Doctor Two">Doctor Two</option>
                        <option value="Doctor Three">Doctor Three</option>
                        <option value="Doctor Four">Doctor Four</option>
                    </select>
                    <br />
                    <label>Your Name </label>
                    <input {...register('name', { required: true, maxLength: 20 })} />

                    <br />
                    <label>Email</label>
                    <input
                        {...register('email', {
                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                        })}
                    />
                    {errors.email && <span>Invalid Email</span>}
                    <br />
                    <label>PHone </label>
                    <input type="phone" {...register('phone')} />
                    <br />
                    <div className="d-flex my-2">
                        <div className="mr-5">
                            <label>Age</label>
                            <input
                                type="number"
                                {...register('age', { min: 1, max: 70, required: true })}
                            />
                        </div>

                        <div>
                            <label>Weight</label>
                            <input
                                type="number"
                                {...register('Weight', { min: 20, max: 100, required: true })}
                            />
                        </div>
                    </div>
                    <input type="hidden" {...register('date')} value={date.toDateString()} />
                    <input type="submit" className="btn-primary" />
                    <span>{status}</span>
                </form>
            </Modal>
        </div>
    );
};

export default ModalAppointment;
