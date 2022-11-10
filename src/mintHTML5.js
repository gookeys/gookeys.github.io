import React from 'react';
import aright from './images/chevron-right.svg';
import MintB from './images/template/Mint-Banner.jpg';
import MintF from './images/template/Mint-Full.jpg';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class MintTemp extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>Gookeys - GeeO HTML5 Theme</title>
                </Helmet>
            <div className='banner'>
                <h1>Mint Html5 Template</h1>
            </div>
    
            <div className='container'>
                <div className='row'>
                    <div className='breadcrum'>
                        <Link to="/Store">Store</Link>
                        <img src={aright} />
                        <span>Mint Html5 Template</span>
                    </div>
                    <div className='col-lg-12 homcrd'>
                        <div className='col-lg-12 col-sm-12 pagecnt lf'>
                            <img src={MintB} alt="Mint Mobile App Html5 Template" />
    
                            <p>Mint Mobile App HTML5 Mobile-friendly Template. Specially designed for Mobile App Developers to Showcase the app to the Customers. If you do UI Design, Mobile App Development, and App Marketing, and you want to show your Mobile app to users this template will help you. This template is a parallax model. It will occupy the full width of the browser window.</p>
                            <p>This template will be compatible with all browsers both older versions and newer modern browsers. And also for all kinds of devices table, mobile, desktop, and laptop.</p>
                            <p>This template will be easy to manage and easy to customize. This template has the About Us, Services, Template, Screen Shot, and Contact Section.</p>
                            <p className='price'>₹ 999.00</p>
                            <a href="https://preview.gookeys.com/template/Mint-Html-Themes/index" target="_blank">Preview</a>
                            <a href="https://gookeys.myinstamojo.com/product/1945226/mint-mobile-app-html5-template" target="_blank">Buy Now</a>
                            <p><b>Text Font Family:</b> Open Sans</p>
    
                            <p><b>Icon Font Family:</b> Pe Icon</p>
    
                            <p><b>jQuery Version:</b> 3.1.1</p>
    
                            <p><b>Images:</b> Apple Site, Social Icons From MaterialDesignIcon.com</p>
    
                            <p><b>Code:</b> HTML5, CSS3, JavaScript, jQuery</p>
    
                            <p><b>Source File:</b>HTML File (.html), Style Sheets (.css), Images (.png)(.gif)(.svg),
                                Fonts(.ttf)</p>
    
                            <p><b>JS Library:</b> wow.js, owl carousel, jQuery Library</p>
    
                            <p><b>CSS Files:</b> Pe Icon 7, Animate, owl carousel, Google Font CSS File, CSS Reset Code
                                in Build.</p>
    
                            <p><b>Images Format:</b> GIF,PNG</p>
    
                            <p><b>Compatible Browsers:</b> Google Chrome, Firefox, Safari, IE 10, Opera etc.</p>
    
                            <p><b>YouTube Video</b> <a
                                    href="https://www.youtube.com/user/BackgroundsLoops">BackgroundsLoops</a></p>
    
                            <p><b>Screen Shot:</b></p>
                            <img src={MintF} alt='Full Screen'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default MintTemp;