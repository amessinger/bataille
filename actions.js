import { assign } from 'xstate';

export default {
  createDeck: assign({
    deck: () => [...Array(52).keys()]
  }),
  resetBoard: assign({
    board: c => c.players.map(() => [])
  }),
  shuffleDeck: assign({
    deck: c => c.deck.sort(() => Math.random() - 0.5)
  }),
  dealDeck: assign({
    deck: [],
    players: c => c.players.map((player, pi) => {
      const deckSliceSize = c.deck.length / c.players.length;
      return {
        ...player,
        hand: c.deck.slice(deckSliceSize * pi, deckSliceSize * (1 + pi))
      }
    })
  }),
  resetCurrentPlayer: assign(c => {
    c.currentPlayerId = 0;
  }),
  setNextPlayer: assign({
    currentPlayerId: c => {
      const nextPlayerId = c.currentPlayerId + 1;
      return nextPlayerId < c.players.length ? nextPlayerId : 0;
    }
  }),
  play: assign(c => {
    const { players } = c;
    const card = players[c.currentPlayerId].hand.pop();
    c.board[c.currentPlayerId].push(card);
    return c;
  }),
  electRoundWinner: assign({
    roundWinnerId: c => {
      const lastCards = c.board.map(stack => stack.slice(-1)[0]);
      return lastCards.indexOf(Math.max(...lastCards));
    }
  }),
  collectBoard: assign({
    players: c => {
      c.players[c.roundWinnerId].folds = [
        ...c.players[c.roundWinnerId].folds,
        ...c.board.flat()
      ];
      return c.players;
    }
  }),
  electGameWinner: assign({
    gameWinnerId: c => {
      const cardsCounts = c.players.map(p => p.folds.length);
      return cardsCounts.indexOf(Math.max(...cardsCounts));
    }
  })
};
