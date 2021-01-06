import React from 'react';
import Card from './card.js';

export default function Stack({ cards }) {
  return cards.map(({ value, color }) => {
    return <Card key={`${value}-${color}`} value={value} color={color}/>;
  });
}
