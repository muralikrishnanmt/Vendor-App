import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Register extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
 

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Register as Vendor" />
          <TextField
            hintText="Enter Your Name"
            floatingLabelText="Name"
            onChange={handleChange('Fname')}
            defaultValue={values.Fname}
          />
		  <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <TextField
            hintText="Enter Your Mobile Number"
            floatingLabelText="Mobile Number"
            onChange={handleChange('mobilenumber')}
            defaultValue={values.mobilenumber}
          />
          
          <br />
          <RaisedButton
            label="Register"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
		  
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Register;
