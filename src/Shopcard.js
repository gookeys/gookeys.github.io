import React from 'react';
import {Link} from 'react-router-dom';

class Shopcard extends React.Component {
    render() {
        if(this.props.alignment === 1){
            return (
                <div className='col-lg-12 homcrd'>
                    <div className='col-lg-6 col-sm-12 templimg lf'>
                        <img alt='Banner' src={this.props.iurl} />
                    </div>
                    <div className='col-lg-6 col-sm-12 templimg lf'>
                        <h1>{this.props.temtitle}</h1>
                        <p>{this.props.temdesc}</p>
                        <p className='price'>{this.props.temprice}</p>
                        <div className='col-lg-12 lf'>
                            <a href={this.props.preview} target="_blank">Preview</a>
                            <a href={this.props.buy} target="_blank">Buy</a>
                            <Link to={this.props.detail}>Detail</Link>
{/* 
                            <a href={this.props.preview}>Preview</a>
                            <a href={this.props.buy} rel="im-checkout" data-text="Buy now">Buy</a>
                            <a href={this.props.detail}>Detail</a> */}
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div className='col-lg-12 homcrd'>
        
                <div className='col-lg-6 col-sm-12 templimg lf'>
                    <h1>{this.props.temtitle}</h1>
                    <p>{this.props.temdesc}</p>
                    <p className='price'>{this.props.temprice}</p>
                    <div className='col-lg-12 lf'>
                    <a href={this.props.preview} target="_blank">Preview</a>
                        <a href={this.props.buy} target="_blank">Buy</a>
                        <Link to={this.props.detail}>Detail</Link>
                        {/* <a href={this.props.preview}>Preview</a>
                        <a href={this.props.buy} rel="im-checkout" data-text="Buy now">Buy</a>
                        <a href={this.props.detail}>Detail</a> */}
                    </div>
                </div>        
                <div className='col-lg-6 col-sm-12 templimg lf'>
                    <img alt='Banner' src={this.props.iurl} />
                </div>

            </div>
            )   
        }
    }
}

export default Shopcard;