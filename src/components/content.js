import React from "react";
import './content.css';
import goat from './images/goat.avif';
import Vaazhai from './images/vaazhai.avif';
import Joker from './images/joker.avif';
import Dc2 from './images/dc2.avif';
import { NavLink } from "react-router-dom";
import Footer from "./footer";
function Movi(){
    return(
        <>
        <div id="rec">
            <h2>Recommended Movies</h2>
        </div>
        <div className="maincont">
            <div id="maincont">
               <div>
                <NavLink to='/Goat'>
                <img src={goat} width={100}/>
                </NavLink>
               
                <p id="font">Greatest Of Alltime</p>
                <p>Action/Drama/Thriller</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={Vaazhai} width={100}/>
                <p id="font">Vaazhai</p>
                <p>Drama</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={Joker} width={100}/>
                <p id="font">Joker:Folie a Deux</p>
                <p>Drama/Suspence/Thriller</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={Dc2} width={100}/>
                <p id="font">Demonte Colony 2</p>
                <p>Horror/Thriller</p>

               </div>
               
            </div>
        </div>

        {/* <div className="maincont">
            <div id="maincont">
               <div>
                <NavLink to='/Goat'>
                <img src={goat} width={100}/>
                </NavLink>
               
                <p id="font">Greatest Of Alltime</p>
                <p>Action/Drama/Thriller</p>

               </div>
               
            </div>
            </div> */}

       {/*  <Footer /> */}
        </>
    )
}

export default Movi;