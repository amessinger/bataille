export default {
  initial: 'idle',
  states: {
    idle: {
      on: {
        CREATE: {
          actions: 'createDeck',
          target: 'created'
        }
      }
    },
    created: {
      on: {
        SHUFFLE: {
          actions: 'shuffleDeck',
          target: 'shuffled'
        }
      }
    },
    shuffled: {
      on: {
        DEAL: {
          actions: 'dealDeck',
          target: 'dealt'
        }
      }
    },
    dealt: {
      type: 'final'
    }
  }
};