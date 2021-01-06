import React from 'react';

export default function RoundSummary({ send, state }) {
  return (
    <button onClick={() => send('NEXT')}>PLAYER #{state.context.roundWinnerId} WON THIS ROUND, NEXT</button>
  );
}