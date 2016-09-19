export const PLAY_CELL = 'PLAY_CELL';
export function playCell(cellId, player) {
  return {
    type: PLAY_CELL,
    cellId,
    player,
  };
}

export const CHECK_WINNING_GAME = 'CHECK_WINNING_GAME';
export function checkWinningGame() {
  return {
    type: CHECK_WINNING_GAME,
  };
}

export const RESET_GAME = 'RESET_GAME'
export function resetGame() {
  return {
    type: RESET_GAME,
  };
}
