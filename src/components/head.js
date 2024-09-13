import React from "react";
import Book from './images/bms.png';
import './Style.css';
import Navgation from "./Navigarion";
import { useEffect } from "react";
import search from './images/search.png';
import sea from './images/sea.png';
import fb from './images/facebook-brands-solid.svg';
import Local from "./location";
import Movi from "./content";

import { NavLink } from "react-router-dom";


function Head() {
    useEffect(() => {
        document.title = "BookMyShow Main Page"
      }, [])
    return(
        <>
    
    <nav>
        <div id="first"> 
            <li>
                <NavLink to="/">
                <img src={Book} width={100} />
                </NavLink>
            </li>
       
        </div>
        <div id="second">
        <input style={{backgroundImage:`url(${sea})`,backgroundSize:'40px',backgroundRepeat:'no-repeat',padding: '12px 20px 12px 40px'}} type="text" placeholder="Search a movie"></input>
       
        </div>
        <div id="first">
        <li><a>Chennai</a></li>
        
        </div>
        <div id="four">
            <NavLink to='/signin'>
            <button>Sign in</button>
            </NavLink>
            
        </div>
    </nav>

    <div>
        <Navgation />
    </div>
   

</>



    )
    
    
    


};

export default Head;