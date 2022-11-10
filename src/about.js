import React from 'react';
import aright from './images/chevron-right.svg';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class About extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>Gookeys - About</title>
                </Helmet>
            <div className='banner'>
                <h1>About Us</h1>
            </div>
    
            <div className='container'>
                <div className='row'>
                    <div className='breadcrum'>
                        <Link to="/">Home</Link>
                        <img src={aright} alt='arrow left'/>
                        <span>About</span>
                    </div>
                    <div className='col-lg-12 homcrd'>
                        <div className='col-lg-12 col-sm-12 pagecnt lf'>
                            <p>Our Vision is to give the Website template and UI Kits for the web application and Web Page.
                                You can Download the template from the LabW3 and used in your web page and web application.
                            </p>
    
                            <p>Gookeys Store have HTML5, CSS3, jQuery, SCSS, LESS, Responsive, Parallex Template available
                                here. Response Template is used for all kinds of devices single template work for Desktop,
                                Tab and Mobile devices. No need separate site for mobile and tab devices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default About;