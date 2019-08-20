import React, { Component } from 'react';
import SignIn from './SignIn';
import Register from './Register';
import FirmDetails from './FirmDetails';
import Address from './Address';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    Name: '',
    email: '',
    mobilenumber: '',
    firmname: '',
    firmtype: '',
    establishmentyear: '',
	doornumber: '',
    locality: '',
    city: '',
    state: '',
	landmark: '',
    addresstype: '',
    pincode: '',
	alternativenumber: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };


  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };


  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { Fname, email, mobilenumber,firmname,firmtype,establishmentyear,doornumber,locality,city,state,landmark,addresstype,pincode,alternativenumber } = this.state;
    const values = { Fname, email, mobilenumber,firmname,firmtype,establishmentyear,doornumber,locality,city,state,landmark,addresstype,pincode,alternativenumber };

    switch (step) {
      case 1:
        return (
          <SignIn
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
	  case 2:
        return (
          <Register
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FirmDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
		);
		case 4:
        return (
          <Address
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 6:
        return <Success />;
    }
  }
}

export default UserForm;
