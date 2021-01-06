import React from 'react';

export default function DeckSuffled({ send }) {
  return (
    <button onClick={() => send('DEAL')}>DEAL DECK</button>
  );
}