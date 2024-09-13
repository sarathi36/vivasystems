import React from "react";
import './event.css';
import eve1 from './Event_images/event1.avif';
import eve2 from './Event_images/event2.avif';
import eve3 from './Event_images/event3.avif';
import eve4 from './Event_images/event4.avif';
import eve5 from './Event_images/event5.avif';
import eve6 from './Event_images/event6.avif';
import eve7 from './Event_images/event7.avif';
import eve8 from './Event_images/event8.avif';


import { NavLink } from "react-router-dom";
import Head from "../head";
import Footer from "../footer";
function Event(){
    return(
        <>
        
            <Head />
        
        <div id="rec">
            <h2>Events in Chennai</h2>
        </div>
        <div className="maincont">
            <div id="maincont">
               <div>
                <NavLink to='/Goat'>
                <img src={eve1} width={100}/>
                </NavLink>
               
                <p id="font">Shillong Cherry Blowssom Festival</p>
                <p>Concert</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={eve2} width={100}/>
                <p id="font">Bandland 2024</p>
                <p>Concert</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={eve3} width={100}/>
                <p id="font">Sunburn Arena Ft Alan Walker</p>
                <p>Concert</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={eve4} width={100}/>
                <p id="font">Samay Rain Unfiltered </p>
                <p>Standup Comedy</p>

               </div>
               
            </div>
        </div>

        <div className="maincont">
            <div id="maincont">
               <div>
                <NavLink to='/Goat'>
                <img src={eve5} width={100}/>
                </NavLink>
               
                <p id="font">Loolapoloosa 2025</p>
                <p>Concert</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={eve6} width={100}/>
                <p id="font">MEKATHLAN</p>
                <p>Competition</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={eve7} width={100}/>
                <p id="font">Arani - Sparking The Hidden Fires</p>
                <p>Dance</p>

               </div>
               
            </div>
            <div id="maincont">
               <div>
                <img src={eve8} width={100}/>
                <p id="font">Speed Dating</p>
                <p>Dating</p>

               </div>
               
            </div>
        </div>

       
       <Footer />
        </>
    )
}

export default Event;