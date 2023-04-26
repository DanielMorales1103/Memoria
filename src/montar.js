import React, {useEffect, useState} from 'react';

import CrearCarta from './carta';
import './carta.css';
const arreglo = [
    {id: 1, selected: false, image: "https://e0.pxfuel.com/wallpapers/827/281/desktop-wallpaper-kir00-on-lucario-mega-and-riolu-pokemon-cool-pokemon-pokemon-cute-riolu-thumbnail.jpg"},
    {id: 1, selected: false, image: "https://e0.pxfuel.com/wallpapers/827/281/desktop-wallpaper-kir00-on-lucario-mega-and-riolu-pokemon-cool-pokemon-pokemon-cute-riolu-thumbnail.jpg"},
    {id: 2, selected: false, image: "https://i.pinimg.com/550x/51/e6/bd/51e6bd60bbe9564ba856e7498b8afcdf.jpg"},
    {id: 2, selected: false, image: "https://i.pinimg.com/550x/51/e6/bd/51e6bd60bbe9564ba856e7498b8afcdf.jpg"},
    {id: 3, selected: false, image: "https://i.pinimg.com/736x/f7/29/a0/f729a0e809598c8336e31bfa5eda31c4--type-pokemon-pokemon-stuff.jpg"},
    {id: 3, selected: false, image: "https://i.pinimg.com/736x/f7/29/a0/f729a0e809598c8336e31bfa5eda31c4--type-pokemon-pokemon-stuff.jpg"},
    {id: 4, selected: false, image: "https://i.pinimg.com/736x/c4/ac/75/c4ac75de06127761f53efb1f26e566a3.jpg"}, 
    {id: 4, selected: false, image: "https://i.pinimg.com/736x/c4/ac/75/c4ac75de06127761f53efb1f26e566a3.jpg"},
    {id: 5, selected: false, image: "https://i.pinimg.com/736x/e2/9f/71/e29f71644bb35947f315b55fb9ed7377.jpg"},
    {id: 5, selected: false, image: "https://i.pinimg.com/736x/e2/9f/71/e29f71644bb35947f315b55fb9ed7377.jpg"},
    {id: 6, selected: false, image: "https://i.pinimg.com/originals/cd/57/46/cd5746c7d66e65d07e68b264a8d47af4.jpg"},
    {id: 6, selected: false, image: "https://i.pinimg.com/originals/cd/57/46/cd5746c7d66e65d07e68b264a8d47af4.jpg"},
    {id: 7, selected: false, image: "https://i.pinimg.com/originals/3b/91/23/3b912346b584c98be7899cb9fb6721d1.jpg"},
    {id: 7, selected: false, image: "https://i.pinimg.com/originals/3b/91/23/3b912346b584c98be7899cb9fb6721d1.jpg"},
    {id: 8, selected: false, image: "https://i.pinimg.com/736x/73/d9/0d/73d90df941cb411974a70138a4eacb97.jpg"},
    {id: 8, selected: false, image: "https://i.pinimg.com/736x/73/d9/0d/73d90df941cb411974a70138a4eacb97.jpg"}];

export default function MontarMemoria(){    
    const[array, setArray] = useState([]);
    const[turnos, setTurns] = useState(0);
    const[cartauno, setCartauno] = useState(null)
    const[cartados, setCartados] = useState(null)
    const[disabled,setDisabled] = useState(false)
    const[cont, setCont] = useState(0)

    const reload=()=>{
        setArray(arreglo.sort(()=>Math.random() -0.5))  
        setTurns(0);
        setCont(0);
    }

    useEffect(()=>{
        setArray(arreglo.sort(()=>Math.random() -0.5))  
        setTurns(0);
    },[])   

    const handleChoice = (card) =>{
        cartauno ? setCartados(card) : setCartauno(card)
    }

    useEffect(()=>{       
        if (cartauno && cartados){
            setDisabled(true)
            if (cartauno.id == cartados.id){
                setCont(prevCont => prevCont+1)
                setArray(prevCard =>{
                    return prevCard.map(card => {
                        if(card.id == cartauno.id){
                            return {...card, selected: true}
                        }else{
                            return card 
                        }
                        
                    })
                })
                
                resetTurn()
            }else{
                setTimeout(()=>resetTurn(),700)         
            }
        }
    },[cartauno,cartados])


    const resetTurn = () =>{
        setCartauno(null)
        setCartados(null)
        setTurns(prevTurns => prevTurns+1)
        setDisabled(false)
    }


    return( 
         < >
         <h1>Memoria</h1>
         <h1>Contador: {turnos}</h1>
         <button onClick={reload}>New Game</button>
         <div className='container'>   
            {array.map (element => { 
                return <CrearCarta imagen={element.image} 
                id={element.id} card={element} handleChoice={handleChoice}
                flipped ={element === cartauno || element === cartados || element.selected}
                disabled={disabled}
                />
            })}
        </div>
        </> 
        
    )
}