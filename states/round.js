export default {
  initial: 'start',
  states: {
    start: {
      entry: [
        'resetCurrentPlayer',
        'resetBoard'
      ],
      on: {
        PLAY: {
          actions: 'play',
          target: 'play'
        }
      }
    },
    play: {
      entry: 'setNextPlayer',
      on: {
        PLAY: [
          {
            cond: 'isLastPlayer',
            actions: 'play',
            target: 'lookup'
          },
          {
            actions: 'play',
            target: 'play'
          }
        ]
      }
    },
    lookup: {
      on: {
        '': [
          {
            cond: 'sameLastCards',
            actions: 'resetCurrentPlayer',
            target: 'play',
          },
          {
            target: 'end'
          }
        ]
      }
    },
    end: {
      entry: ['electRoundWinner', 'collectBoard'],
      type: 'final'
    }
  }
};