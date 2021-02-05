import {Component} from 'react';

import './createform.styles.scss';

class CreateForm extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="create-form">
                <h2>Create Account</h2>
                <input 
                name="email"
                type="email" 
                placeholder="Enter your Email"
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Enter your Email"}
                />
                <input 
                name="email"
                type="email" 
                placeholder="Confirm Email"
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Confirm Email"}
                />

                <button className="btn-sign-up">Next</button>
            </div>
        );  
    }
}


export default CreateForm;