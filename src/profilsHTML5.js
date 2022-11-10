import React from 'react';
import aright from './images/chevron-right.svg';
import ProfilsB from './images/template/Profils-Banner.jpg';
import ProfilsF from './images/template/profils-template.jpg';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class GeeOTemp extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>Gookeys - Profils HTML5 Template</title>
                </Helmet>
            <div className='banner'>
                <h1>Profils HTML5 Template</h1>
            </div>
    
            <div className='container'>
                <div className='row'>
                    <div className='breadcrum'>
                        <Link to="/Store">Store</Link>
                        <img src={aright} />
                        <span>Profils HTML5 Template</span>
                    </div>
                    <div className='col-lg-12 homcrd'>
                        <div className='col-lg-12 col-sm-12 pagecnt lf'>
                            <img src={ProfilsB} />
    
                            <p>PROFILS HTML5 mobile friendly website template. Specially designed for Profiles, Contact details, and your details view. This one is a simple super clean template. This will be compatible for both mobile, tablet, and computer screens. You can easily customizable with your content. This one single page template. </p>
                            <p className='price'>₹ 299.00</p>
                            <a href="https://preview.gookeys.com/template/Profils-List-your-People/index.html" target="_blank">Preview</a>
                            <a href="https://gookeys.myinstamojo.com/product/3345507/profils-html5-template" target="_blank">Buy Now</a>
                            <p><b>Text Font Family:</b> Poppins from Google Fonts </p>
    
                            <p><b>Icon:</b> SVG Icons </p>
    
                            <p><b>Jquery Version:</b> 3.4.1 </p>
    
                            <p><b>Code:</b> HTML5, CSS3, JavaScript </p>
    
                            <p><b>Source File:</b>HTML File (.html), Style Sheets (.css), Images (.jpeg), Fonts(.ttf) </p>
    
                            <p><b>Compatible Browsers:</b>Google Chrome, Firefox, Safari, IE 10, Opera etc. </p>
    
                            <p><b>Tags:</b> Free Responsive Template, free responsive templates download, free responsive
                                mobile templates, free HTML5, CSS3 templates, free fluid responsive themes, single flat
                                Responsive web template, cross-browser compatible web template, best responsive template</p>
    
                            <img src={ProfilsF} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default GeeOTemp;