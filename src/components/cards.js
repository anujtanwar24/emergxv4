import React from 'react';
import './card.css';
import CardItem from './cardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Choose one</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src='/photos/doc1.jpg'
              text='help people in their medical emergency and get recognized'
              label='DOCTOR'
              path='/services'
            />
            <CardItem
              src='/photos/pat1.jpg'
              text='get help from doctors and hospital within seconds near you'
              label='PATIENT'
              path='/products'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;