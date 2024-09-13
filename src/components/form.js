import React from "react";
import Head from "./head";
import Navgation from "./Navigarion";
import './form.css';
import { useEffect } from "react";
import animegirl from './images/animegirl.jpg';
import moon from './images/moon.jpg';
import { useState } from "react";
import axios from "axios";
import Footer from "./footer";
import { NavLink } from "react-router-dom";


function Ticket(){

    useEffect(() => {
        document.title = "Book a Ticket"
      }, [])
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [email,setEmail] = useState('');
    const [movie,setMovie] = useState('');
    const [theatre,setTheatre] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');

    const submit =() =>{
        if(firstname.length === 0){
            alert("Firstname has empty");
        }
        else{
            const url = 'http://localhost:3000/database.php';
            let fdata = new FormData();
            fdata.append('firstname', firstname);
            fdata.append('lastname', lastname);
            fdata.append('age', age);
            fdata.append('gender', gender);
            fdata.append('email', email);
            fdata.append('movie', movie);
            fdata.append('theatre', theatre);
            fdata.append('date', date);
            fdata.append('time', time);
            axios.post(url,fdata).then(response => alert(response.data)).catch(error => alert(error));
            
        }
    }
    return(
        <>
        <Head />
        
       <div className="form">
        <form  method="post" action="">
            <fieldset style={{backgroundImage:`url(${moon})`}}>
                <legend>BOOK TICKETS</legend>
            <label>First Name :</label>
            <input type="text" name="firstname" placeholder="Enter Your Firstname"  required></input><br></br><br></br>
            <label>Last Name :</label>
            <input type="text" name="lastname" placeholder="Enter Your Lastname" required></input><br></br><br></br>
            <label>Age :</label><br></br>
            <input type="number" name="age" min={12} max={60}  placeholder="Enter Your Age" required></input><br></br><br></br>
            <label >Gender :
                <select name="gender">
                    <option>Choose your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>

                </select><br></br><br></br>
            </label>
            <label>E-Mail ID :</label>
            <input type="email" name="email" placeholder="Enter Your Email"></input><br></br><br></br>
            <label>Movie Name :</label>
            <input type="text" name="movie" placeholder="Enter a Movie name" required></input><br></br><br></br>
            <label>Theatre :</label>
            <input type="text" name="theatre" placeholder="Enter a Theatre name" required></input><br></br><br></br>
            <label>Date :</label><br></br>
            <input type="date" name="date" required></input><br></br><br></br>
            <label>Time :</label><br></br>
            <input type="time" name="time" required></input><br></br><br></br>
            <NavLink to='/Message' >
            <input id="bot" type="button" value="continue"></input>
            </NavLink>
           
            </fieldset>
           

        </form>
       </div>

       <Footer />
        </>
    )
}

export default Ticket;