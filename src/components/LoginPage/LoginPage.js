/*  
💥 Title : LoginPage
📃 Description : Login Page Componentn Handler
✍ Author : Saad Hasan
⌚ Date : 12/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import '../../styles/login.page.css';
import LoginForm from './LoginForm/LoginForm';

const LoginPage = () => (
    <>
        <section className="login-page-wrapper d-flex flex-column justify-content-center align-items-center">
            <LoginForm />
        </section>
    </>
);

export default LoginPage;
