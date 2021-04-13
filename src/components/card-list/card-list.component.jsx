import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const Cardlist = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((m) => {
        return <Card key={m.id} monster= {m}/>
      })}
    </div>
  );
};

export default Cardlist;
