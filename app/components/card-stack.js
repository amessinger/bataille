import React from 'react';
import Card from './card.js';

export default function Stack({ cards }) {
  return (
    <div className="card-stack">
      {cards.map(({ value, color }) => <Card key={`${value}-${color}`} value={value} color={color}/>)}
    </div>
  );
}
