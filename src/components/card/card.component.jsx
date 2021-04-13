import React from 'react';
import './card.styles.css';

const Card = ({ monster }) => {
  return (
    <div className='card-container'>
    <img  alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=150x150`}/>
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
