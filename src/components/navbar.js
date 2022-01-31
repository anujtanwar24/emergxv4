import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';


function Navbar() {

const [click, setClick] = useState(false);
const [button,setButton] = useState(true);

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false);
const showButton = () => {
    if (window.innerWidth <= 960){
        setButton(false);
    } else{
        setButton(true);
    }

};

useEffect(() =>{
    showButton();
}, [] );

window.addEventListener('resize', showButton);


    return (
       <>
       <nav className="navbar">
       <div className='navbar-container'>

         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}><h1 className='navbar-txt'>EmergX</h1>
          
         </Link>
         <div className='menu-icon' onClick={handleClick}>
           <i className={click? 'fas fa-times' : 'fas fa-bars'}/>

         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-link'> 
             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                 Home
             </Link>
             </li>
             <li className='nav-link'> 
             <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                 About
             </Link>
             </li>
             <li className='nav-link'> 
             <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                 Services
             </Link>
             </li>
            
             <li className='nav-link'> 
             <Link to='/emergency' className='nav-links' onClick={closeMobileMenu}>
                 <h2>Emergency</h2>
             </Link>
             </li>
         </ul>

       
        
           </div>
     </nav>
     </>
    )
}

export default Navbar;
