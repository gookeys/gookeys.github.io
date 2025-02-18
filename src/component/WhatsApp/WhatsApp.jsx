import React from 'react'
import "./WhatsApp.scss";
import whatsapp from "./../../assets/images/WhatsApp.webp";

const WhatsApp = () => {
return(
    <div className='whatsapp'>
        <a href="https://wa.me/+919489694742?text=Hi" target="_blank"><img src={whatsapp}/></a>
    </div>
)
}

export default WhatsApp