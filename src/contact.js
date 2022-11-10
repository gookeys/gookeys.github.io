import React from 'react';
import aright from './images/chevron-right.svg';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class Contact extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>Gookeys - Contact Us</title>
                </Helmet>
            <div className='banner'>
                <h1>Contact Us</h1>
            </div>
    
            <div className='container'>
                <div className='row'>
                    <div className='breadcrum'>
                        <Link to="/">Home</Link>
                        <img src={aright} alt='arrow left' />
                        <span>Contact</span>
                    </div>
                    <div className='col-lg-12 homcrd'>
                        <div className='col-lg-12 col-sm-12 pagecnt lf'>
    
                            <p>Gookeys Software,<br />Melathavittupalayam, Kattuputhur,
                                <br />Trichy DT.<br />Tamil Nadu, India.
                            </p>
    
                            <h2>E-mail:</h2>
                            <p>contact@gookeys.com</p>
    
                            <h2>Support:</h2>
                            <p><b>Helpline:</b> +91 9751 446 449</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default Contact;