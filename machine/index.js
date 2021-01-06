import { Machine } from 'xstate';
import actions from './actions.js';
import guards from './guards.js';
import gameStates from './states/game.js';

export default Machine(
  {
    id: 'game',
    context: {
      players: [
        { hand: [], folds: [] },
        { hand: [], folds: [] }
      ],
      deck: [],
      board: [],
      currentPlayerId: undefined,
      roundWinnerId: undefined,
      gameWinnerId: undefined
    },
    ...gameStates
  },
  {
    actions,
    guards
  }
);
