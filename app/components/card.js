import React from 'react';

const colors = ['♣', '♦', '♥', '♠'];
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

export default function Card({ value, color, isFaceDown }) {
  const className = isFaceDown ? 'card card--face-down' : 'card';
  return (
    <div className={className}>
      <div className="card__value">{values[value]}</div>
      <div className="card__color">{colors[color]}</div>
      <div className="card__value">{values[value]}</div>
    </div>
  );
}
