// @flow

import React, { Component } from 'react';
import './App.css';
import Cell from './components/Cell.js'
import Row from './components/Row.js'
import { connect } from 'react-redux';
import * as actions from './actions.js';
import { bindActionCreators } from 'redux';
import Overlay from './components/Overlay';


export class App extends Component {
  render() {
    return (
      <div className="App">
        Player turn : {this.props.ticTacToeApp.currentPlayer}
        <button onClick={e => this.props.actions.resetGame()}>
          Reset Game
        </button>
        <div>
          {
            [0,1,2].map((rowId, index) => (
              <Row rowId={rowId} key={index}>
                {[0,1,2]
                  .map((columnId, index) => <Cell rowId={rowId} columnId={columnId} key={index}/>)}
              </Row>
            ))
          }
        </div>
        {
          Object.keys(this.props.ticTacToeApp.winningDirection).length
          ? <Overlay>
            <h1 className="overlay__title">
              {this.props.ticTacToeApp.currentPlayer === 'round' ? 'Cross' : 'Round'} Wins !
            </h1>
            <p
              href="#"
              className="overlay__startover"
              onClick={e => this.props.actions.resetGame()}
            >
              Start Over
            </p>
          </Overlay>
          :''
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ticTacToeApp: state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
