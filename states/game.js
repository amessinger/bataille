import deckStates from './deck.js';
import roundStates from './round.js';

export default {
  initial: 'deck',
  states: {
    deck: {
      ...deckStates,
      onDone: {
        target: 'round'
      }
    },
    round: {
      ...roundStates,
      onDone: [
        {
          cond: 'emptyPlayersHands',
          entry: 'transferCards',
          actions: 'electGameWinner',
          target: 'done'
        },
        {
          entry: 'transferCards',
          target: 'round'
        }
      ]
    },
    done: {
      type: 'final'
    }
  }
};
