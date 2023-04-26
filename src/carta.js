import React, { useState } from "react";
import './carta.css';

export default function CrearCarta(props) {
    
    const handleClick = () => {
        if(!props.disabled)
            props.handleChoice(props.card)
    }

    return (
        <>
            <div className="card"> 
                <div className={props.flipped ? "flipped" : ""  }>
                    <img className="front" src={props.imagen} alt="front card" ></img>
                    <img 
                    className="back" onClick={handleClick} 
                    alt="back card" src="https://i.pinimg.com/550x/e9/6c/28/e96c28604fad7820b311abfbd2075dd6.jpg"></img>
                </div>
            </div>
        </>
        
    );
}