import './logsignpage.styles.scss';

import LoginForm from './../../components/loginform/loginform.component';

const LogSignPage = () => (
    <div className="form-container">
        <div className="log-sign-section">
            <LoginForm />

            <div 
            style={{
                background: 'url(https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} 
            
            className="log-bg">
            
            </div>
        
        </div>
     
    </div>
)


export default LogSignPage;