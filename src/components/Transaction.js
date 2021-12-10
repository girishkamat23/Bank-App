import React from 'react';
import * as actions from '../constants';

function Transaction(props) {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        placeholder={actions.AMOUNT_PLACEHOLDER_TEXT}
        onChange={props.change}></input>
      <button onClick={props.deposit}>Deposit</button>
      <button onClick={props.withdraw}>Withdraw</button>
      <p style={{ color: 'red', fontWeight: 'bold' }}>{props.error}</p>
      <p>
        <span>&#8377;</span>
        {props.balance}
      </p>
    </div>
  );
}
export default Transaction;
