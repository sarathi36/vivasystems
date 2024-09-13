import React from "react";
import './mainpage.css';
import game1 from './images/game1.avif';
import game2 from './images/game2.avif';
import game3 from './images/game3.avif';
import game4 from './images/game4.avif';
function Game(){
    return(
        <>
        <div id="about">
            <h2>Top Games & Sports Events</h2>
        </div>
        <div className="live">
           <div id="live">
              <div>
                <img src={game1} width={100} />
                <p>ISL Chennaiyin FC 2024</p>
                <p>Chennai</p>

              </div>                          
           </div>
           <div id="live">
              <div>
                <img src={game2} width={100} />
                <p>Rapid Chess Tournaments </p>
                <p>Chennai</p>

              </div>                           
           </div>
           <div id="live">
              <div>
                <img src={game3} width={100} />
                <p> Chess Championship for All Ages</p>
                <p>Chennai</p>

              </div>                           
           </div>
           <div id="live">
              <div>
                <img src={game4} width={100} />
                <p>HUFT - Dogathon 2024</p>
                <p>Chennai</p>

              </div>              
           </div>
        </div>
        </>
    )
}

export default Game;