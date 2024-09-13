import React from "react";
import Head from "../head";
import './goat.css';
import { useEffect } from "react";
import Navgation from "../Navigarion";
import GOAT from './goatimages/goat.avif';
import vijay from './goatimages/vijay.avif';
import mohan from './goatimages/mohan.avif';
import poster from './goatimages/gposter.webp';
import yogi from './goatimages/yogibabu.avif';
import prasanth from './goatimages/prasanth.avif';
import sneha from './goatimages/sneha.avif';
import jayaram from './goatimages/jayaram.avif';
import prabhu from './goatimages/prabhu.avif';
import { NavLink } from "react-router-dom";
import Footer from "../footer";

function Goat(){
    useEffect(() => {
        document.title = "The Greatest Of AllTime"
      }, [])
    return(
        <>
        <Head />
        
        <div className="goatmain" style={{backgroundImage:`URL(${poster})`,width:'90%',margin:'auto'}}>
           
            <div id="goatmain">
                <div id="goatt"> 
                <img src={GOAT} width={100} />

                </div>
                <div id="goat1">
                <p id="name">The Greatest Of Alltime</p>
                <div>
                    <h4>2D,Imax 2D</h4>
                    <h4>Tamil,Telugu</h4>
                </div>
                <div>
                    <p>3h3M</p>
                    <p>Action</p>
                    <p>Drame</p>
                    <p>Thriller</p>
                    <p>Sep 5 2024</p>
                </div>
                <NavLink to="/ticket">
                <button>Book Ticket</button>
                </NavLink>
                </div>
                
            </div>
            <div id="goat2">
               {/*  <p>Greatest Of Alltime</p> */}
               
            </div>
        </div>

        <div id="about">
            <h2>About the Movie</h2>
            <p>Consequences of an unknown past haunt the present of a special anti-terrorist squad. How will they confront it?</p>
        </div>
        <div id="about">
                <h2>Cast</h2>
            </div>
        <div className="cast">
           
            <div id="cast">
                <div>
                <img src={vijay} width={100} />
                <p>Vijay</p>
                </div>
                <div>
                <img src={mohan} width={100} />
                <p>Mohan</p>
                </div>
                <div>
                <img src={yogi} width={100} />
                <p>Yogi Babu</p>
                </div>
                <div>
                <img src={prasanth} width={100} />
                <p>Prasanth</p>
                </div>
                <div>
                <img src={jayaram} width={100} />
                <p>Jayaram</p>
                </div>
                <div>
                <img src={prabhu} width={100} />
                <p>Prabhu Deva</p>
                </div>
               
                

            </div>
        </div>

        <Footer />
        </>
    )
}

export default Goat;