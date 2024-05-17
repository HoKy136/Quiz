import React, { useEffect, useState } from "react";

import GameRender from "../Game/Game"

function WelcomePage(){
    const [showGame , setShowGame] = useState(true)
    return (
        <div >
            {showGame ? 
            <div>
            <h1 style={{color : 'white'}}>Welcome to React Quiz Game!</h1>
            <button 
            onClick={() =>{
                setShowGame(!showGame)
            }}
            style={{
            backgroundColor :'#6ED5B7',
            color:'black',
            borderRadius : '10%',
            border :'none',
            width : '150px',
            height : '50px',
            }}
            >Bắt cái đầu</button>
            </div> 
            :   
           
                
              <GameRender /> 
               }

          
           
           
        </div>
    )
}
export default WelcomePage