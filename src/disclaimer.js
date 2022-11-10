import React from 'react';
import aright from './images/chevron-right.svg';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class Disclaimer extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>Gookeys - Disclaimer</title>
                </Helmet>
            <div className='banner'>
                <h1>Disclaimer for Gookeys.com/Store</h1>
            </div>
    
            <div className='container'>
                <div className='row'>
                    <div className='breadcrum'>
                        <Link to="/">Home</Link>
                        <img src={aright} alt='arrow left'/>
                        <span>Disclaimer</span>
                    </div>
                    <div className='col-lg-12 homcrd'>
                        <div className='col-lg-12 col-sm-12 pagecnt lf'>
                            <h1>Disclaimer for Gookeys</h1>
    
                            <p>If you require any more information or have any questions about our site's disclaimer, please
                                feel free to contact us by email at contact@gookeys.com.</p>
    
                            <h2>Disclaimers for Gookeys Store</h2>
    
                            <p>All the information on this website - htpps://www.gookeys.com/store - is published in good
                                faith and for general information purpose only. Gookeys Store does not make any warranties
                                about the completeness, reliability and accuracy of this information. Any action you take
                                upon the information you find on this website (Gookeys Store), is strictly at your own risk.
                                Gookeys Store will not be liable for any losses and/or damages in connection with the use of
                                our website.</p>
    
                            <p>From our website, you can visit other websites by following hyperlinks to such external
                                sites. While we strive to provide only quality links to useful and ethical websites, we have
                                no control over the content and nature of these sites. These links to other websites do not
                                imply a recommendation for all the content found on these sites. Site owners and content may
                                change without notice and may occur before we have the opportunity to remove a link which
                                may have gone 'bad'.</p>
    
                            <p>Please be also aware that when you leave our website, other sites may have different privacy
                                policies and terms which are beyond our control. Please be sure to check the Privacy
                                Policies of these sites as well as their "Terms of Service" before engaging in any business
                                or uploading any information.</p>
    
                            <h2>Consent</h2>
    
                            <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
    
                            <h2>Update</h2>
    
                            <p>Should we update, amend or make any changes to this document, those changes will be
                                prominently posted here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default Disclaimer;