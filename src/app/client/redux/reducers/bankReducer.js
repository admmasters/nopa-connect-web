import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function bankReducer(state = initialState.bank, action) {
  switch(action.type) {
    default:
      return state;
  }
}
