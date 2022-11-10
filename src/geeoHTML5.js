import React from 'react';
import aright from './images/chevron-right.svg';
import GeeoB from './images/template/Geeo-Banner.jpg';
import GeeoF from './images/template/GeeO-Full.jpg';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class GeeOTemp extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>Gookeys - GeeO HTML5 Theme</title>
                </Helmet>
            <div className='banner'>
                <h1>GeeO HTML5 Theme</h1>
            </div>
    
            <div className='container'>
                <div className='row'>
                    <div className='breadcrum'>
                        <Link to="/Store">Store</Link>
                        <img src={aright} />
                        <span>GeeO HTML5 Theme</span>
                    </div>
                    <div className='col-lg-12 homcrd'>
                        <div className='col-lg-12 col-sm-12 pagecnt lf'>
                            <img src={GeeoB} alt="GeeO Html File Theme for your Sites" />
    
                            <p>GeeO Web Theme for Mobile App. In this template, you can describe your mobile app features, workflow screen shoot, etc. This theme is the Apple iOS effect and we have designed the theme for the iOS Mobile app. In this one-page template, all the sections will come on a single page. About, Contact, Theme, Maps, Email Subscribe to, Contact form, FAQ, Testimonial, App Screen Shot Slider and Mobile App Grid View And also have popup it will fix properly on both computer and mobile. This theme will fix properly all kinds of screens. Like tabs, mobile, desktop, and laptop.</p>
                            <p className='price'>₹ 999.00</p>
                            <a href="https://preview.gookeys.com/template/GeeO-Themes/index" target="_blank">Preview</a>
                            <a href="https://gookeys.myinstamojo.com/product/1945234/geeo-html5-theme" target="_blank">Buy Now</a>
                            <p><b>Text Font Family:</b> Open Sans</p>
    
                            <p><b>Icon Font Family:</b> Ionicons</p>
    
                            <p><b>jQuery Version:</b> 2.2.4</p>
    
                            <p><b>Scroll jQuery:</b> Scroll Smooth</p>
    
                            <p><b>Banner Image:</b> www. pexels.com</p>
    
                            <p><b>Code:</b> HTML5, CSS3, JavaScript, jQuery</p>
    
                            <p><b>Source File:</b>HTML File (.html), Style Sheets (.css), Images (.jpeg), Fonts(.ttf)</p>
    
                            <p><b>Images:</b> Screen Shot and Images from Apple Official Site.</p>
    
                            <p><b>JS Library:</b> wow.js, typed.js, waypoint 2.0.3, jquery counterup, owl carousel</p>
    
                            <p><b>CSS Files:</b> Ionicons, Animate, owl carousel, Google Font CSS File <b>We used the
                                    Bootstrap Grid CSS for Responsive View.</b></p>
    
                            <p><b>Images Format:</b> PNG</p>
    
                            <p><b>Image Icon:</b> www.iconfinder.com</p>
    
                            <p><b>Compatible Browsers:</b> Google Chrome, Firefox, Safari, IE 10, Opera etc.</p>
    
    
                            <p><b>Full Screen Shot:</b></p>
                            <img src={GeeoF} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default GeeOTemp;