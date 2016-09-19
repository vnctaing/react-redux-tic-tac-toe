// @flow

import React from 'react';
import * as actions from '../actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cross from './Cross.js'
import Round from './Round.js'


const Cell = (props) =>{
  const { rowId, columnId } = props;

  function renderCellStatus() {
    if (props.ticTacToeApp.rows[rowId][columnId] === null) {
      return ''
    } else {
      return props.ticTacToeApp.rows[rowId][columnId] === 'cross' ? <Cross/> : <Round/>
    }
  }
  return (
    <div
      className="cell"
      onClick={(e) => {
        const cellId = [String(props.rowId), String(props.columnId)];
        props.actions.playCell(cellId, props.ticTacToeApp.currentPlayer);
        props.actions.checkWinningGame()
    }}>
      {
        renderCellStatus()
      }
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    ticTacToeApp: state,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
