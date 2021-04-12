/*  
💥 Title : LoginForm
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 12/ April/ 2021 
*/

import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { handleSignin } from './firebase.auth';
import '../../../styles/login.page.css';

/*  🔥 React Dependencies 🔥 */

const LoginForm = () => {
    const [status, setStatus] = useState();
    const googleLoginHandle = () => {
        handleSignin()
            .then((response) => {
                console.log(response);
            })
            .then((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <Card className="p-1 ml-5 login-card shadow-sm">
                <div className="card-body my-5 text-center d-flex flex-column justify-content-center align-items-center">
                    <h3 className="card-title">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" disabled />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="email" className="form-control" disabled />
                        </div>
                        <input type="submit" className="btn-primary" disabled />
                    </form>
                    <small className="mt-2">Login with Form temporary disabled</small>
                    <br />
                    <p className="text-secondary text-center"> ~ Or ~</p>
                    <button
                        type="button"
                        className="btn-primary login-with-google"
                        onClick={googleLoginHandle}
                    >
                        Login with Google
                    </button>
                </div>
            </Card>
        </>
    );
};

export default LoginForm;
