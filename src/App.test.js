import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import getWinningDirection from './scripts/getWinningDirection';
import getColumns from './scripts/getColumns';
import getDiagonals from './scripts/getDiagonals';
import { initialState } from './rootReducer.js'
import configureMockStore from 'redux-mock-store';
import Row from './components/Row'
import Cell from './components/Cell'


describe('React Components', function() {
  let wrapper;
  const mockStore = configureMockStore();
  describe('App', () => {
    beforeEach(() => {
      const store = mockStore(initialState);
      wrapper = shallow(<App store={store} />).shallow();
    });

    it('contains 3 Rows', () => {
      expect(wrapper.find(Row)).to.have.length(3);
    });
  })

  describe('Row', () => {
    it('should have a row class', () => {
      wrapper = shallow(<Row />);
      expect(wrapper.hasClass('row')).to.equal(true);
    })
  });
});
