import React from 'react';
import { render } from 'react-dom';

import { useMachine } from '@xstate/react';
import machine from '../machine.js';

function App() {
  const [state, send] = useMachine(machine);

  if (state.matches({ deck: 'idle' })) {
    return (
      <button onClick={() => send('CREATE')}>CREATE DECK</button>
    );
  }

  if (state.matches({ deck: 'created' })) {
    return (
      <button onClick={() => send('SHUFFLE')}>SHUFFLE DECK</button>
    );
  }

  if (state.matches({ deck: 'shuffled' })) {
    return (
      <button onClick={() => send('DEAL')}>DEAL DECK</button>
    );
  }

  if (state.matches({ round: 'start' })) {
    return (
      <button onClick={() => send('PLAY')}>PLAY CARD as player #{state.context.currentPlayerId}</button>
    );
  }

  if (state.matches({ round: 'play' })) {
    return (
      <button onClick={() => send('PLAY')}>PLAY CARD as player #{state.context.currentPlayerId}</button>
    );
  }

  if (state.matches({ round: 'lookup' })) {
    send('always');
  }

  if (state.matches({ round: 'summary' })) {
    return (
      <button onClick={() => send('NEXT')}>PLAYER #{state.context.roundWinnerId} WON THIS ROUND, NEXT</button>
    );
  }

  if (state.matches('done')) {
    return (
      <>
        <p>PLAYER #{state.context.gameWinnerId} WON THE GAME</p>
        <code><pre>{JSON.stringify(state, null, 2)}</pre></code>
      </>
    );
  }

  return (
    <>
      <p>COULD NOT RENDER THIS STATE ({JSON.stringify(state.value)})</p>
      <code><pre>{JSON.stringify(state, null, 2)}</pre></code>
    </>
  )
}

render(<App />, document.getElementById('root'));