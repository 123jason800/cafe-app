import {Component} from 'react';
import './navbar.styles.scss';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    constructor(props){
        super();
        this.state = {
            showNavItems: false
        };
    }


    render() {
        const {showNavItems} = this.state;

        console.log(showNavItems);
        return (
            <header>
                <div className="container">
                    <nav className="navbar">
                        <Link className="navbar-title" to="/">
                         Cafe App
                        </Link>
                        <span onClick={() => this.setState({showNavItems: !showNavItems})} className="navbar-btn navbar-item"> <span className="icon-menu"></span></span>
                        <div 
                        className={`nav-items ${showNavItems?'show-menu':''}`} >
                            <Link to="/" className="navbar-item icon-home-house-streamline"/>
                            <Link to="/cart" className="navbar-item icon-caddie-shop-shopping-streamline"/>
                            <Link to="/categories" className="navbar-item icon-align-justify"/>
                            <Link to="/login" className="navbar-item"> Login </Link>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }


}


export default Navbar;