import React from "react";
import './footer.css';
import show from './images/bms.png';
import linkedin from './images/linkedin-brands-solid.svg';
import facebook from './images/facebook-brands-solid.svg';
import email from './images/envelope-regular.svg';
import insta from './images/instagram-brands-solid.svg';
import whatsapp from './images/whatsapp-brands-solid.svg';
function Footer(){
    return(
        <>
        <div className="footer">
             <div id="footer">
                <div>
                <h4>List Your Show</h4>
                <p>Got a Show,events,activities or a great expreance ? Partner with us</p>
                </div>
               <div>
               <img src={show} width={100} />
               </div>
               <div id="link">
                <img src={linkedin} width={100}/>
                <img src={whatsapp} width={100}/>
                <img src={insta} width={100} />
                <img src={facebook} width={100} />
                <img src={email} width={100} />
               </div>
               <div id="link">
               
               </div>
               
             </div>

             
        </div>
        </>
    )
}

export default Footer;