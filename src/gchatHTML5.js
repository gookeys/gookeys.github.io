import React from 'react';
import aright from './images/chevron-right.svg';
import GChatB from './images/template/Gchat-Banner.jpg';
import GChatF from './images/template/GChat-Full.jpg';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class GeeOTemp extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>Gookeys - G Chat HTML5 Template</title>
                </Helmet>
            <div className='banner'>
                <h1>G Chat HTML5 Template</h1>
            </div>
    
            <div className='container'>
                <div className='row'>
                    <div className='breadcrum'>
                        <Link to="/Store">Store</Link>
                        <img src={aright} />
                        <span>G Chat HTML5 Template</span>
                    </div>
                    <div className='col-lg-12 homcrd'>
                        <div className='col-lg-12 col-sm-12 pagecnt lf'>
                            <img src={GChatB} />
    
                            <p>GChat is a website template for mobile app developers. In this one is the single page
                                parallax template. Its will have the all the option like features, pricing, developer team,
                                contact, map, contact form and social network links. This one is suitable for all modern web
                                browser and mobile browser. G Chat Single Page Responsiv Template. You can use this template
                                for different purpose of showcase the your app, web application details, any kind of product
                                you have. In this theme have the pricing table you can also pricing comparison for your
                                product in three different pricing. This pure HTML5, CSS3 template. </p>
                            <p className='price'>₹ 999.00</p>
                            <a href="https://preview.gookeys.com/template/GChat/index" target="_blank">Preview</a>
                            <a href="https://gookeys.myinstamojo.com/product/1945244/g-chat-html5-template" target="_blank">Buy Now</a>
                            <p><b>Text Font Family:</b> Raleway from Google Fonts </p>
    
                            <p><b>Icon Font Family:</b> Font Awesome </p>
    
                            <p><b>Jquery Version:</b> 3.1.0 </p>
    
                            <p><b>Scroll jQuery:</b> Scroll Smooth </p>
    
                            <p><b>Banner Image:</b> www.pixels.com </p>
    
                            <p><b>Code:</b> HTML5, CSS3, JavaScript, jQuery </p>
    
                            <p><b>Source File:</b>HTML File (.html), Style Sheets (.css), Images (.jpeg), Fonts(.ttf) </p>
    
                            <p><b>Image Icon:</b> www.iconfinder.com </p>
    
                            <p><b>Compatible Browsers:</b>Google Chrome, Firefox, Safari, IE 10, Opera etc. </p>
    
                            <p><b>Tags:</b> Free Responsive Template, free responsive templates download, free responsive
                                mobile templates, free HTML5, CSS3 templates, free fluid responsive themes, single flat
                                Responsive web template, cross-browser compatible web template, best responsive template</p>
    
                            <img src={GChatF} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default GeeOTemp;