import React from 'react';

export default function Done({ state }) {
  return (
    <>
      <p>PLAYER #{state.context.gameWinnerId} WON THE GAME</p>
      <code><pre>{JSON.stringify(state, null, 2)}</pre></code>
    </>
  );
}