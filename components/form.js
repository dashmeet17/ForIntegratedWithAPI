import React from 'react'
import '../css/form.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { transferTransaction, fetchTransactions } from '../redux/actions/transactionActions.js'
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      amount : '',
      paymentMode: '',
      username: ''
    }

   this.handleChange = this.handleChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
   this.onClick = this.onClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(user) {
    console.log(user);
  }

  onSubmit(e) {
    e.preventDefault();

    const trxn = {
      //paymentMode : this.state.paymentMode,
      paymentMode : 'VISA',
      amount: this.state.amount,
      username: 'USER-A'
    };

    this.props.transferTransaction(trxn);

    alert("Transaction transferred");

    //var data = this.props.fetchTransactions();
    //this.setState({ transactions: data });
  }

  render () {
    return (
      <div className="container jumbotron  paymentForm">
      <form onSubmit={this.onSubmit}>

      <div className="row">

      <div className="col-lg-3">
      <div className="btn-group-vertical">
      <Button className="buttonGrp" value="Input" variant="secondary" onClick={this.onClick}>USER-A</Button>
      <Button className="buttonGrp" vclassName="buttonGrp" alue="Input" variant="secondary" onClick={this.onClick}>USER-B</Button>
      <Button className="buttonGrp" value="Input" variant="secondary" onClick={this.onClick}>USER-C</Button>
      </div>

      </div>




      <div className="col-lg-3">
      <div>
        <label>
          <input type='radio' name="paymentMode" value={this.state.paymentMode} onChange={this.onChange} required/>
          American Express
        </label>
      </div>

          <div>
            <label>
            <input type='radio' name="paymentMode" value={this.state.paymentMode} onChange={this.onChange} required/>
            VISA
          </label>
          </div>

          <div>
          <label>
          <input type='radio' name="paymentMode" value={this.state.paymentMode} onChange={this.onChange} required/>
          DBS PayLah
          </label>
          </div>
      </div>

          <div className='col-lg-2 padding'>
            <label>
            <input type='number' name="amount" value={this.state.amount} max='5000' onChange={this.handleChange} required/>
            <br/>
            <p className='helpText'>***Maximum Allowed amount is 5000 INR</p>
            </label>
          </div>

          <div className="col-lg-3 padding">
            <input className="button btn btn-primary transferBtn" type='submit' value='Transfer' />
          </div>
      </div>

      <div>
      </div>
      </form>
      </div>
    )
  }
}

Form.propTypes = {
  transferTransaction: PropTypes.func.isRequired
};

export default connect(null, { transferTransaction })(Form);
