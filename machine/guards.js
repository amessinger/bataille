export default {
  isLastPlayer: c => c.currentPlayerId +1 === c.players.length,
  emptyPlayersHands: c => c.players.every(p => !p.hand.length),
  sameLastCards: c => c.board.every(stack => stack[stack.length - 1] === c.board[0][c.board[0].length - 1])
};