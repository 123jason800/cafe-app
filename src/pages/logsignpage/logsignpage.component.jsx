import './logsignpage.styles.scss';

import LoginForm from './../../components/loginform/loginform.component';
import CreateForm from './../../components/createform/createform.component';

const LogSignPage = () => (
    <div className="form-container">
        <div className="log-sign-section">
            <div 
            style={{
                background: 'url(https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} 
            
            className="log-bg">
            </div>

            <div className="log-right">
                <LoginForm />
                <div className="custom-hr">
                </div>
                <CreateForm />
            </div>
        </div>
     
    </div>
)


export default LogSignPage;