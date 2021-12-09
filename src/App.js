import React from 'react';
import Transaction from './components/Transaction';
import './App.css';
import { connect } from 'react-redux';
import {
  setError,
  clearInput,
  depositAmount,
  withdrawAmount,
} from './actions/index';

class BankApp extends React.Component {
  state = {
    textValue: '',
    accounts: [
      {
        accname: 'John',
        acc_no: 1,
        amount: 1000,
        min_bal: 1000,
      },
      {
        accname: 'Jane',
        acc_no: 2,
        amount: 2000,
        min_bal: 1000,
      },
      {
        accname: 'Jack',
        acc_no: 3,
        amount: 3000,
        min_bal: 1000,
      },
    ],
    amount: 0,
    error: null,
  };

  handleOnChange = (e) => {
    let textInput = e.target.value !== '' ? +e.target.value : '';
    this.setState({ textValue: textInput });
    if (this.props.error !== null) {
      this.props.setError(null);
    }
  };

  depositOnClick = () => {
    if (this.state.textValue !== '') {
      this.props.setError(null);
      this.props.deposit(this.state.textValue);
      this.setState({ textValue: '' }, () => {
        console.log(this.state);
      });
    } else {
      this.props.setError('Enter valid amount');
    }
    /* let accounts = [...this.state.accounts];
    let index = accounts.findIndex((play) => play.acc_no === 1);
    if (index !== -1) {
      let account = { ...accounts[index] };
      account.amount += this.state.textValue;
      accounts.splice(index, 1, account);
    }
    console.log(accounts);
    this.setState({ accounts: accounts, error: null }); */
  };

  withdrawOnClick = () => {
    if (this.state.textValue !== '') {
      this.props.setError(null);
      this.props.withdraw(this.state.textValue);
      this.setState({ textValue: '' }, () => {
        console.log(this.state);
      });
    }
    /* let accounts = [...this.state.accounts];
    let index = accounts.findIndex((account) => account.acc_no === 1);
    if (index !== -1) {
      let account = { ...accounts[index] };
      if (account.amount - this.state.textValue >= account.min_bal) {
        account.amount -= this.state.textValue;
        accounts.splice(index, 1, account);
      } else {
        this.setState({ error: 'Insufficient Funds!!' });
      }
    }
    console.log(accounts);
    this.setState({ accounts: accounts }); */
  };

  render() {
    return (
      <div className="app">
        <Transaction
          // accountNum={this.state.handleOnAccNum}
          // balance={this.state.accounts[0].amount}
          value={this.state.textValue}
          balance={this.props.amount}
          change={this.handleOnChange}
          deposit={this.depositOnClick}
          withdraw={this.withdrawOnClick}
          error={this.props.error}></Transaction>
      </div>
    );
  }
}

//Mapping state -> props
const mapStateToProps = (state) => ({
  amount: state.amount,
  error: state.error,
});

//Mapping dispatch function to props
const mapDispatchToProps = (dispatch) => ({
  deposit: (amt) => dispatch(depositAmount(amt)),
  withdraw: (amt) => dispatch(withdrawAmount(amt)),
  setError: (error) => dispatch(setError(error)),
  clearInput: () => dispatch(clearInput()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankApp);
