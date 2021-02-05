import {Component} from 'react';
import './loginform.styles.scss';
import FormInput from './../forminput/forminput.component';
class Loginpage extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.setState({email:'',password:''})
    }

    render() {
        return ( 
      
            <form onSubmit={this.handleSubmit} className="login-form">
                <h2>Sign in</h2>
                <FormInput 
                placeholder="Enter your Email"   
                handleChange={this.handleChange}
                onBlur={(e) => e.target.placeholder = "Enter your Email"}
                value={this.state.email} 
                name="email"
                type="email" 
                />
                <FormInput 
                placeholder="Enter your Password"   
                onBlur={(e) => e.target.placeholder = "Enter your Password"}
                handleChange={this.handleChange}
                password={this.state.password} 
                value={this.state.password} 
                name="password"
                type="password" 
                />
                <button className="login-btn" type="submit">Login</button>
            </form>

        )
    }
}


export default Loginpage;