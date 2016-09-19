import { assert } from 'chai';
import getWinningDirection from './scripts/getWinningDirection';
import getColumns from './scripts/getColumns';
import getDiagonals from './scripts/getDiagonals';

describe('Utils function', function() {
  describe('getDiagonals()', function() {
    it('should return an object with the diagonals', () => {
      const state = {
        rows: {
          0: ['cross', null, null],
          1: [null, 'cross', null],
          2: ['round', null, null],
        },
        currentPlayer: 'cross',
        winningDirection: {}
      };
      assert.deepEqual({
        0: ['cross','cross',null],
        1: ['round', 'cross', null]
      }, getDiagonals(state));
    });

    it('should return an object with the diagonals when empty', () => {
      const state = {
        rows: {
          0: [null, null, null],
          1: [null, null, null],
          2: [null, null, null],
        },
        currentPlayer: 'cross',
        winningDirection: {}
      };
      assert.deepEqual({
        0: [null, null, null],
        1: [null, null, null]
      }, getDiagonals(state));

    });
  });

  describe('getColumns()', () => {
    it('should return an object with the columns', () => {
      const state = {
        rows: {
          0: ['cross', 'cross', null],
          1: ['cross', 'round', null],
          2: ['round', null, 'cross'],
        },
        currentPlayer: 'cross',
        winningDirection: {}
      };
      assert.deepEqual(
        {
          '0': [ 'cross', 'cross', 'round' ],
          '1': [ 'cross', 'round', null ],
          '2': [ null, null, 'cross' ]
        }, getColumns(state));
    });

    it('should return object with the columns with empty columns', () => {
      const state = {
        rows: {
          0: [null, null, null],
          1: [null, null, null],
          2: [null, null, 'cross'],
        },
        currentPlayer: 'cross',
        winningDirection: {}
      };
      assert.deepEqual(
        {
          '0': [ null, null, null ],
          '1': [ null, null, null ],
          '2': [ null, null, 'cross' ]
        }, getColumns(state));
    });

  });

  describe('winningDirection()', () => {
    it('should return the diagonalId that won', () => {
      const state = {
        rows: {
          0: ['cross', null, null],
          1: ['round', 'cross', null],
          2: ['round', null, 'cross'],
        },
        currentPlayer: 'cross',
        winningDirection: {}
      };
      const diagonal = getDiagonals(state);
      assert.deepEqual('0', getWinningDirection(diagonal));
    });

    it('should return the diagonalId that won', () => {
      const state = {
        rows: {
          0: ['cross', null, null],
          1: ['round', 'cross', null],
          2: ['round', null, null],
        },
        currentPlayer: 'cross',
        winningDirection: {}
      };
      const diagonal = getDiagonals(state);
      assert.deepEqual(undefined, getWinningDirection(diagonal));
    });
  })

});
