import constants from '../constants';

export const depositAmount = (amount) => ({
  type: constants.DEPOSIT,
  payload: amount,
});

export const withdrawAmount = (amount) => ({
  type: constants.WITHDRAW,
  payload: amount,
});

export const setError = (errorValue) => ({
  type: constants.SET_ERROR,
  payload: errorValue,
});

export const setText = (textValue) => ({
  type: constants.SET_TEXT,
  payload: textValue,
});

export const clearInput = (setInput) => ({
  type: constants.CLEAR_INPUT,
});
