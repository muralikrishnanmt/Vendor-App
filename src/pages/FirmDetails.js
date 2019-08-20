import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FirmDetails extends Component {
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
          <AppBar title="Enter Firm Details" />
          <TextField
            hintText="Enter your Firm Name"
            floatingLabelText="Firm Name"
            onChange={handleChange('firmname')}
            defaultValue={values.firmname}
          />
          <br />
          <TextField
            hintText="Enter Your Firm Type"
            floatingLabelText="Firm Type"
            onChange={handleChange('firmtype')}
            defaultValue={values.firmtype}
          />
          <br />
          <TextField
            hintText="Enter Firm Establishment Year"
            floatingLabelText="Establishment Year"
            onChange={handleChange('establishmentyear')}
            defaultValue={values.establishmentyear}
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

export default FirmDetails;
