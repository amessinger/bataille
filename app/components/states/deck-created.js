import React from 'react';

export default function DeckCreated({ send }) {
  return (
    <button onClick={() => send('SHUFFLE')}>SHUFFLE DECK</button>
  );
}