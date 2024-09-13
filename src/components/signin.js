import React from "react";
import animegirl from './images/animegirl.jpg';
import './form.css';
import { useEffect } from "react";
import Head from "./head";
import Footer from "./footer";
import { NavLink } from "react-router-dom";

function Signin(){
    useEffect(() => {
        document.title = "Create an Account"
      }, [])

    return(
        <>
        <Head />

         <div className="form">
        <form  method="post" action="account.php">
            <fieldset style={{backgroundImage:`url(${animegirl})`}}>
                <legend>CREATE ACCOUNT</legend>
            <label>First Name :</label>
            <input type="text" name="firstname" placeholder="Enter Your Firstname"  required></input><br></br><br></br>
            <label>Last Name :</label>
            <input type="text" name="lastname" placeholder="Enter Your Lastname" required></input><br></br><br></br>
            <label >Phone No :</label>
            <input type="phone" name="phone" placeholder="Enter a Phoneno" required></input><br></br><br></br>
            <label>E-Mail ID :</label>
            <input type="email" name="email" placeholder="Enter Your Email"></input><br></br><br></br>
            <label>Password :</label>
            <input type="password" name="password" placeholder="Enter a Password" required></input><br></br><br></br>
            <NavLink to='/Message'>
            <input id="bot" type="submit" value="Create Account "></input>
            </NavLink>
           
            </fieldset>
           

        </form>
       </div>

       <Footer />
        </>
    )
}

export default Signin;