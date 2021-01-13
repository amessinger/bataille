import React, { lazy, Suspense, Fragment } from 'react';
import { render } from 'react-dom';
import { useMachine } from '@xstate/react';
import { inspect } from "@xstate/inspect";
import machine from '../machine/index.js';
import Loading from './components/loading.js';
import { getStateComponentName } from './utils.js';
import CardStack from './components/card-stack.js';
import './style.css';

// inspect({
//   url: "https://statecharts.io/inspect",
//   iframe: false
// });

function App() {
  const [state, send] = useMachine(machine, { devTools: true });

  const Component = lazy(() => import(`./components/states/${getStateComponentName(state)}.js`));

  return (
    <div className="game">
      <div className="action">
        <Suspense fallback={<Loading />}>
          <Component send={send} state={state} />
        </Suspense>
      </div>

      <div className="deck">
        <h1>Deck</h1>
        <CardStack cards={state.context.deck} isFaceDown={true} />
      </div>

      <div className="board">
        <h1>Board</h1>
        {state.context.board.map((side, index) => {
          return (
            <div key={`player${index}`}>
              <h1>Player #{index} Side</h1>
              <CardStack cards={side} />
            </div>
          );
        })}
      </div>

      <div className="player-collection">
        {state.context.players.map((player, index) => {
          return (
            <div className="player" key={`player${index}`}>
              <h1>Player #{index}</h1>
              <h2>Hand ({player.hand.length})</h2>
              <CardStack cards={player.hand} isFaceDown={true} />
              <h2>Folds ({player.folds.length})</h2>
              <CardStack cards={player.folds} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
