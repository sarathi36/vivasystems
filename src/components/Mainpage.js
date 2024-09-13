import React from "react";
import Head from "./head";
import Movi from "./content";
import popular1 from './images/popular1.avif';
import popular2 from './images/popular2.avif';
import popular3 from './images/popular3.avif';
import popular4 from './images/popular4.avif';
import './mainpage.css';
import Game from "./game";
import Footer from "./footer";

function Mainpage(){
    return(
        <>
        <Head />
        
        <div>
            <Movi />
        </div>

        <div id="about">
            <h2>Popular Events</h2>
        </div>
        <div className="live">
           <div id="live">
              <div>
                <img src={popular1} width={100} />
                <p>Hoemonal By Sumukhi Suresh</p>
                <p>Chennai</p>

              </div>                          
           </div>
           <div id="live">
              <div>
                <img src={popular2} width={100} />
                <p>Arani-Sparking The Hidden Fires </p>
                <p>Chennai</p>

              </div>                           
           </div>
           <div id="live">
              <div>
                <img src={popular3} width={100} />
                <p> Speed Dating</p>
                <p>Chennai</p>

              </div>                           
           </div>
           <div id="live">
              <div>
                <img src={popular4} width={100} />
                <p>Rockout Night</p>
                <p>Chennai</p>

              </div>              
           </div>
        </div>
    
        <div>
         <Game />
        </div>
          
          <footer>
            <Footer />
          </footer>

        </>
    )
}

export default Mainpage;