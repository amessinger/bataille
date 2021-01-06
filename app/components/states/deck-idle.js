import React from 'react';

export default function DeckIdle({ send }) {
  return (
    <button onClick={() => send('CREATE')}>CREATE DECK</button>
  );
}