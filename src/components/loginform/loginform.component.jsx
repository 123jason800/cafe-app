import {Component} from 'react';
import './loginform.styles.scss';

class Loginpage extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return ( 
      
            <form className="login-form">
                <h2>Sign in using Email and Password</h2>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="*****" />
            </form>

        )
    }
}


export default Loginpage;