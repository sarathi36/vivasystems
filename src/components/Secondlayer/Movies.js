import React from "react";
import './movie.css';
import { useEffect } from "react";
import goat from './images/goat.avif';
import Vaazhai from './images/vaazhai.avif';
import Joker from './images/joker.avif';
import Dc2 from './images/dc2.avif';
import three from './images/35.avif';
import beetle from './images/beetle.avif';
import saturday from './images/saturday.avif';
import stree from './images/stree.avif';
import { NavLink } from "react-router-dom";
import Head from "../head";
import Footer from "../footer";
function Movi(){
   useEffect(() => {
      document.title = "Movies in Chennai"
    }, [])
    return(
        <>
        
            <Head />
        
        <div id="rec">
            <h2>Movies in Chennai</h2>
        </div>
        <div className="maincont">
            <div id="maincont">
               <div>
                <NavLink to='/Goat'>
                <img src={goat} width={100}/>
                </NavLink>
               
                <p id="font">Greatest Of Alltime</p>
                <p>Tamil/Telugu</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={Vaazhai} width={100}/>
                <p id="font">Vaazhai</p>
                <p>Tamil</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={Joker} width={100}/>
                <p id="font">Joker:Folie a Deux</p>
                <p>English</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={Dc2} width={100}/>
                <p id="font">Demonte Colony 2</p>
                <p>Tamil</p>

               </div>
               
            </div>
        </div>

        <div className="maincont">
            <div id="maincont">
               <div>
                <NavLink to='/Goat'>
                <img src={beetle} width={100}/>
                </NavLink>
               
                <p id="font">Beetlejuice Beetlejuice</p>
                <p>English</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={stree} width={100}/>
                <p id="font">Stree 2</p>
                <p>Hindi</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={saturday} width={100}/>
                <p id="font">Saripoodha Sanivaaram</p>
                <p>Telugu</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={three} width={100}/>
                <p id="font">35</p>
                <p>Tamil/Telugu/malayalam</p>

               </div>
               
            </div>
        </div>

       
       <Footer />
        </>
    )
}

export default Movi;