// @flow

import { fromJS } from 'immutable';
import * as actions from './actions';
import getWinningDirection from './scripts/getWinningDirection';
import getColumns from './scripts/getColumns';
import getDiagonals from './scripts/getDiagonals';

export const initialState = {
  rows: {
    0: [null, null, null],
    1: [null, null, null],
    2: [null, null, null],
  },
  currentPlayer: 'cross',
  winningDirection: {}
};

function ticTacToe(state: Object = initialState, action: Object) {
  const iState = fromJS(state);
  switch(action.type){
    case actions.RESET_GAME:
      return initialState;
    case actions.PLAY_CELL:
      const rowId: Function = action.cellId[0];
      const columnId = action.cellId[1];

      // prevent changing a cell that has already been played
      if (state.rows[rowId][columnId] === null) {
        return iState
          .update('currentPlayer', (player) => player === 'round' ? 'cross' : 'round')
          .updateIn(['rows', rowId], (list) => list.set(columnId, action.player))
          .toJS();
      } else {
        return state;
      }
    case actions.CHECK_WINNING_GAME:
      const newState = Object.assign({}, state);

      const columns = getColumns(newState);
      const diagonal = getDiagonals(newState);

      const winningRow = getWinningDirection(newState.rows);
      const winningColumn = getWinningDirection(columns);
      const winningDiagonal = getWinningDirection(diagonal);

      if (winningColumn !== undefined) {
        return iState.set('winningDirection', {direction: 'column', id: winningColumn})
              .toJS();
      } else if (winningRow !== undefined) {
        return iState.set('winningDirection', {direction: 'row', id: winningRow})
              .toJS();
      } else if (winningDiagonal !== undefined){
        return iState.set('winningDirection', {direction: 'diagonal', id: winningDiagonal})
              .toJS();
      } else {
        return state;
      }

    default:
      return state;
  }

}

export default ticTacToe;
