import React from "react";
import Head from "./head";
import error from './images/error.svg';
import './message.css';
import { useEffect } from "react";
import Footer from "./footer";
import { NavLink } from "react-router-dom";

function Message(){
    useEffect(() => {
        document.title = "Internal Server Error"
      }, [])
    return(
        <>
        <Head />

        <div className="error">
            <div id="error">
            <img src={error} width={100} />
            </div>
            <div>
            <h3>OOPS ! Server Not Connected...</h3>
            </div>
            <div id="video">
            <NavLink to='/Video'>
            <h2>If Server Connected Click here..</h2>
            </NavLink>
            </div>
          
           
           
            
           
        </div>
       {/*  <div className="error" style={{backgroundImage:`url(${error})`}}>
           
        </div> */}

        <Footer />
        </>
    )
}

export default Message;