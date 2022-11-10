import React from 'react';
import shopdata from './shopdata';
import Shopcard from './Shopcard';
import { Helmet } from 'react-helmet';

class Shop extends React.Component{
    render(){
        var alignment = 1;
        const shopcardet = shopdata.map(shopval => {
            alignment = alignment === 1?0:1;
            // console.log(alignment);
            return <Shopcard key={shopval.id} alignment={alignment} iurl={shopval.cimg} iutype={shopval.cimtype} temtitle={shopval.ctitle} temdesc={shopval.cdesc} temprice={shopval.cprice} preview={shopval.cprevurl} buy={shopval.cbuyurl} detail={shopval.cdeturl}/>
        });
        return(
            <main>
                <Helmet>
                    <title>Gookeys - Store</title>
                </Helmet>
                <div className='banner'>
                    <h1>HTML Website Templates Ready to use for your Web Project. Themes are compatible for all the size devices.</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        {shopcardet}
                    </div>
                </div>
            </main>
        )
    }
}

export default Shop