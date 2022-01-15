import React from 'react'
import { Button } from './Button'
import './maincomp.css'

function Maincomp() {
    return (
        <div className='hero-container'>
            <video src='/photos/emergxvideo1.mp4' autoPlay loop muted />
         <h1>GET HELP IN MEDICAL EMERGENCY WITHIN MINTUES</h1> 
         <p>What are you waiting for? </p>  
         <div className='hero-btns'>
             <Button className='btns' buttonStyle='btn--outline'  buttonSize='btn--large'>JOIN US</Button>
         </div>
        </div>
    )
}

export default Maincomp
