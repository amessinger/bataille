import React from 'react';

export default function RoundPlay({ send, state }) {
  return (
    <button onClick={() => send('PLAY')}>PLAY CARD as player #{state.context.currentPlayerId}</button>
  );
}