import React from 'react'
import { useNavigate } from 'react-router-dom'
import './maincomp.css'

function Maincomp() {
let navigate = useNavigate();
    return (
        <div className='hero-container'>
            <video src='/photos/emergxvideo1.mp4' autoPlay loop muted />
         <h1>GET HELP IN MEDICAL EMERGENCY WITHIN MINTUES</h1> 
         <p>What are you waiting for? </p>  
         <div className='hero-btns'>
             <button onClick={()=>{
                 navigate('/sign')
             }} className='btns btn--outline btn--large'>JOIN US</button>
         </div>
        </div>
    )
}

export default Maincomp
