import React from 'react';

export default function RoundStart({ send, state }) {
  return (
    <button onClick={() => send('PLAY')}>PLAY CARD as player #{state.context.currentPlayerId}</button>
  );
}