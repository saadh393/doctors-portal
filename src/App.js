import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/indexPageComponents/Home';
import './styles/global.css';
import Appointment from './components/AppointmentPage/Appointment';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/appointment">
                    <Appointment />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
