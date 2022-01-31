import React from 'react'
import { auth } from '../firebase'


function SignOut() {
    return (
        <div >
            <button className='btn--super' onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut