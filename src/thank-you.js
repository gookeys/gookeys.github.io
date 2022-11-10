import React from 'react';
import check from './images/check-circle.svg';
import { Helmet } from 'react-helmet';

class GeeOTemp extends React.Component{
    render(){
        return(
            <main>
                                <Helmet>
                    <title>Gookeys - Thank You</title>
                </Helmet>
        <div className='banner'>

            <h1>Thank You</h1>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 homcrd'>
                    <div className='col-lg-12 col-sm-12 pagecnt lf thnk'>
                        <div className='col-lg-12'>
                            <img src={check} />
                        </div>
                        <p>Thank You for choosing our product. We have large numbers of Template available here keep on shopping.</p>
                        <div className='col-lg-12' >
                            <a href='/store'>Shop More</a>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    </main>
        )
    }
}

export default GeeOTemp;