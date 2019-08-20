import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Address extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Your Address" />
          <TextField
            hintText="Enter Your Door Number"
            floatingLabelText="Door Number"
            onChange={handleChange('doornumber')}
            defaultValue={values.doornumber}
          />
          <br />
          <TextField
            hintText="Enter Your Locality"
            floatingLabelText="Locality"
            onChange={handleChange('locality')}
            defaultValue={values.locality}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
		  <TextField
            hintText="Enter Your State"
            floatingLabelText="State"
            onChange={handleChange('state')}
            defaultValue={values.state}
          />
          <br />
		  <TextField
            hintText="Enter Your LandMark"
            floatingLabelText="LandMark"
            onChange={handleChange('landmark')}
            defaultValue={values.landmark}
          />
          <br />
		  
		  
		  <TextField
            hintText="Enter Your Address Type"
            floatingLabelText="Address Type"
            onChange={handleChange('addresstype')}
            defaultValue={values.addresstype}	
          />
          <br />
		  
		  <TextField
            hintText="Enter Your Pincode"
            floatingLabelText="Pincode"
            onChange={handleChange('pincode')}
            defaultValue={values.pincode}
          />
          <br />
		  
		  <TextField
            hintText="Enter Your Alternative Number"
            floatingLabelText="Alternative Number"
            onChange={handleChange('alternativenumber')}
            defaultValue={values.alternativenumber}
          />
          <br />
		  
		  
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default Address;
