/* import constants from '../constants'; */
import * as actions from '../constants';

export const depositAmount = (amount) => ({
  type: actions.DEPOSIT,
  payload: amount,
});

export const withdrawAmount = (amount) => ({
  type: actions.WITHDRAW,
  payload: amount,
});

export const setError = (errorValue) => ({
  type: actions.SET_ERROR,
  payload: errorValue,
});

export const setText = (textValue) => ({
  type: actions.SET_TEXT,
  payload: textValue,
});

export const clearInput = (setInput) => ({
  type: actions.CLEAR_INPUT,
});
