import React from "react";
import vid from './Video/PHP.mp4';
import './video.css';
import { useEffect } from "react";
import Head from "./head";
import Footer from "./footer";
function Video(){
    useEffect(() => {
        document.title = "If Server Connected"
      }, [])
    return(
        <>
        <Head />
        <div className="video">
        <video width="750" height="500" controls >
          <source src={vid} type="video/mp4"/>
        </video>
        <h1> PHP Database Connection with Wampserver</h1>
        </div>
       

       <Footer />
        </>
    )
}

export default Video;