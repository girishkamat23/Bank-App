import constants from '../constants';

const initialState = {
  amount: 0,
  minBal: 1000,
  error: null,
  textValue: '',
  input: null,
};

// Reducer is a Pure function- Output depends on input only
// action eg: {type: 'DEPOSIT', payload: 1000}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.DEPOSIT: {
      let newState = { ...state };
      newState.amount += action.payload;
      return newState;
    }

    case constants.WITHDRAW: {
      let newState = { ...state };
      if (newState.amount - action.payload >= newState.minBal) {
        newState.amount -= action.payload;
      } else {
        newState.error = 'Insufficient Balance!';
      }
      return newState;
    }

    case constants.SET_ERROR: {
      let newState = { ...state };
      newState.error = action.payload;
      return newState;
    }

    case constants.SET_TEXT: {
      let newState = { ...state };
      newState.textValue = action.payload;
      return newState;
    }

    case constants.CLEAR_INPUT: {
      let newState = { ...state };
      newState.input = null;
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
