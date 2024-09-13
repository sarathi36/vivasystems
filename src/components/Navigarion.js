import React from "react";
import './nav.css';
import { NavLink } from "react-router-dom";
function Navgation (){
    return(
        <>
        <div className="main">
            <div id="first">
               <li>
                <NavLink to='/Movies'>Movies</NavLink>
                </li>
               <li> <a href=""> Streams</a></li>
               <li>
               <NavLink to='/Event'>Events </NavLink>
               </li>
              
             
               <li> <a href=""> Plays</a></li>
               <li> <a href=""> Sports</a></li>
               <li> <a href=""> Activities</a></li>
            </div>
            <div id="second">
               <li> <a href=""> ListYourShow</a></li>
               <li> <a href=""> Corporates</a></li>
               <li> <a href=""> Offers</a></li>
               <li> <a href=""> Gift card </a></li>
              
            </div>
        </div>
        </>
    )
}

export default Navgation;