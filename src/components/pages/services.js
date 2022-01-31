import React from 'react'
import './page.css'
import CardItem from '../cardItems'


function Services() {
    return (
        <div className='service'>
            <h1 >Services</h1>
            <h2>In Emergency</h2>
            <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src='/photos/doc2.jpg'
              text='get on demand video call support from the nearby doctors if doctors is not available physically'
              label='VIDEO CALL'
              path=''
            />
            <CardItem
              src='/photos/emergxv3.jpg'
              text='get direction to nearby doctors and hospitals within seconds '
              label='NAVIGATION'
              path=''
            />
             <CardItem
              src='/photos/emergxv4.jpg'
              text='inform nearby haspitals about the emergency and get help'
              label='NEARBY HOSPITAL'
              path=''
            />
            <CardItem
              src='/photos/emergxv5.jpg'
              text='get help from private clinics and pharmacies in your sorrounding area '
              label='PHARMASY'
              path=''
            />
             <CardItem
              src='/photos/emergxv6.jpg'
              text='if you are stuck in a remote area with no network get offline tutorial of first-aid to help patient'
              label='OFFLINE'
              path=''
            />
           
           
          </ul>
 
        </div>
      </div>
    </div>
        </div>
    )
}

export default Services
