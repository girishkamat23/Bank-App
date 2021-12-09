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

export const clearInput = (setInput) => ({
  type: constants.CLEAR_INPUT,
});
