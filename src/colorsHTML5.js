import React from 'react';
import aright from './images/chevron-right.svg';
import ColorB from './images/template/Color-Interior-Banner.jpg';
import ColorF from './images/template/Colors-Interior-Full.jpg';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class ColorTemp extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>Gookeys - Colors Interior HTML5 Template</title>
                </Helmet>
            <div className='banner'>
                <h1>Colors Interior HTML5 Template</h1>
            </div>
    
            <div className='container'>
                <div className='row'>
                    <div className='breadcrum'>
                        <Link to="/Store">Store</Link>
                        <img src={aright} />
                        <span>Colors Interior HTML5 Template</span>
                    </div>
                    <div className='col-lg-12 homcrd'>
                        <div className='col-lg-12 col-sm-12 pagecnt lf'>
                            <img src={ColorB} alt="Colors Interior HTML5 Template" />
    
                            <p>Color Interior HTML5 Mobile-friendly Template. Specially designed for construction-related customers. If you do interior designing, carpentering, and elevation design, and you want to showcase your building, apartments, and flats office building this template will work for you. This template will be easy to manage and easy to customize. This template has the About Us, Services, Portfolio, and Contact sections.</p>
                            <p className='price'>₹ 999.00</p>
                            <a href="https://preview.gookeys.com/template/ColorsInterior/index" target="_blank">Preview</a>
                            <a href="https://gookeys.myinstamojo.com/product/1945229/colors-interiors-html5-template" target="_blank">Buy Now</a>
                            <p><b>Text Font Family:</b> SegoUI, Dosis</p>
    
                            <p><b>Icon Font Family:</b> Pe Icon</p>
    
                            <p><b>jQuery Version:</b> 3.1.1</p>
    
                            <p><b>Scroll jQuery:</b> Scroll Smooth</p>
    
                            <p><b>Images:</b> www. pexels.com</p>
    
                            <p><b>Code:</b> HTML5, CSS3, JavaScript, jQuery</p>
    
                            <p><b>Source File:</b>HTML File (.html), Style Sheets (.css), Images (.jpeg), Fonts(.ttf)</p>
    
                            <p><b>JS Library:</b> wow.js, owl carousel, jQuery Library</p>
    
                            <p><b>CSS Files:</b> Pe Icon 7, Animate, owl carousel, Google Font CSS File</p>
    
                            <p><b>Images Format:</b> JPEG,PNG</p>
    
                            <p><b>Compatible Browsers:</b> Google Chrome, Firefox, Safari, IE 10, Opera etc.</p>
    
                            <p><b>Screen Shot:</b></p>
                            <img src={ColorF} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default ColorTemp;