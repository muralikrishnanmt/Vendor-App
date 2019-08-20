import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { Fname, email, mobilenumber,firmname,firmtype,establishmentyear,doornumber,locality,city,state,landmark,addresstype,pincode,alternativenumber }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="Name" secondaryText={Fname} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Mobile Number" secondaryText={mobilenumber} />
            <ListItem primaryText="Firm Name" secondaryText={firmname} />
            <ListItem primaryText="Firm Type" secondaryText={firmtype} />
            <ListItem primaryText="Establishment Year" secondaryText={establishmentyear} />
			<ListItem primaryText="Door Number" secondaryText={doornumber} />
            <ListItem primaryText="Locality" secondaryText={locality} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="State" secondaryText={state} />
            <ListItem primaryText="LandMark" secondaryText={landmark} />
            <ListItem primaryText="Address Type" secondaryText={addresstype} />
			<ListItem primaryText="Pincode" secondaryText={pincode} />
            <ListItem primaryText="Alternative Number" secondaryText={alternativenumber} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
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

export default Confirm;
