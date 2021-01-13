export default {
  initial: 'start',
  states: {
    start: {
      entry: [
        'resetCurrentPlayer',
        'resetBoard'
      ],
      on: {
        always: {
          target: 'play'
        }
      }
    },
    play: {
      on: {
        PLAY: [
          {
            cond: 'isLastPlayer',
            actions: 'play',
            target: 'lookup'
          },
          {
            actions: [
              'play',
              'setNextPlayer'
            ],
            target: 'play'
          }
        ]
      }
    },
    lookup: {
      on: {
        always: [
          {
            cond: 'sameLastCards',
            actions: 'resetCurrentPlayer',
            target: 'play',
          },
          {
            target: 'summary'
          }
        ]
      }
    },
    summary: {
      entry: [
        'electRoundWinner',
        'collectBoard'
      ],
      on: {
        'NEXT': {
          target: 'end'
        }
      }
    },
    end: {
      type: 'final'
    }
  }
};