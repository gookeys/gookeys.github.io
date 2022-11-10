import React from 'react';
import logo from './../images/gookeys-logo.svg';
import './Footer.scss';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='col-lg-3 col-sm-12 lf'>
                                <h1>Company</h1>
                                <ul>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/privacy'>Privacy</Link>
                                </li>
                                <li>
                                    <Link to='/disclaimer'>Disclaimer</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact</Link>
                                </li>
                                </ul>
                            </div>

                            <div className='col-lg-3 col-sm-12 lf'>
                                <h1>Our Services</h1>
                                <ul>
                                    <li><a href="https://www.gokul.work/search">Search</a></li>
                                    <li><a href="https://www.gokul.work/tools">Tools</a></li>
                                    <li><a href="https://icon.geekgokul.com">IconBasket</a></li>
                                    <li><a href="https://www.geekgokul.com/">Geek Gokul</a></li>
                                </ul>
                            </div>

                            <div className='col-lg-3 col-sm-12 lf'>
                                <h1>Social</h1>
                                <ul>
                                    <li><a href="https://www.facebook.com/gookeys">Facebook</a></li>
                                    <li><a href="https://www.twitter.com/gookeys">Twitter</a></li>
                                    <li><a href="https://www.instagram.com/gookeys">Instagram</a></li>
                                    <li><a href="https://www.linkedin.com/company/gookeys">Linkedin</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3 col-sm-12 lf'>
                                <img src={logo} alt='Gookeys Logo'/>
                                <p>We have the experience in Web and Mobile App Design of past 9 Years. We create the en number
                                    of design for web pased product and web sites.</p>
                            </div>
                        </div>
                        <div className='col-lg-12 lf crbtm'>
                            <p>© 2021 Gookeys Store</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer