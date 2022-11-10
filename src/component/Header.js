import React from 'react';
import logo from './../images/gookeys-logo.svg';
import './Header.scss';
import {NavLink} from 'react-router-dom';


class Header extends React.Component{
    render(){
        return(
            <header>
            <nav>
                <div className="logo">
                    <a href="/"><img src={logo} alt='gookeys logo'/></a>
                </div>
                <ul>
                    <li><NavLink exact activeClassName="active" to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName="active" to='/Store'>Store</NavLink></li>
                </ul>
            </nav>
        </header>
        )
    }
}
export default Header