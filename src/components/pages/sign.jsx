import React from 'react';
import SignIn from '../signin';
import './page.css';
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


import SignOut from '../signout';

function Sign() {
    const [user] = useAuthState(auth)
  return <div className='sign'>
     <h1>Easy Sign-in within seconds</h1> 
     {user ? (<h2>Welcome,<br/>{localStorage.getItem("name")}<br/> you are sucessfully sign-in. please Browse through the navigation  <SignOut/></h2>) : <SignIn />}
  </div>;
}

export default Sign;
