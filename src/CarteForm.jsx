import React, { Component } from "react";
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';

import {KeyboardDatePicker} from '@material-ui/pickers';

const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

const handleDateChange = date => {
  setSelectedDate(date);
};

class CarteForm extends Component {
  state = {
    nomCarte: "",
    numCarte: undefined,
    expiration: undefined
  };

 handleDateChange = date => {
    setSelectedDate(date);
  };

  addNom = event => {
    this.setState({ nomCarte: event.target.value });
  };

  addNum = event => {
    this.setState({ numCarte: event.target.value });
  };

  addExp = event => {
    this.setState({ expiration: event.target.value });
  };

  addCarte = event => {
    event.preventDefault();

    const nomCarte = this.state.nomCarte;
    const numCarte = this.state.numCarte;
    const exp = this.state.expiration;

    this.props.onCarteAdd({ nomCarte, numCarte, exp });
    console.log({nomCarte, numCarte, exp})

    this.setState({ nomCarte: "", numCarte: undefined, expiration: undefined });
  };

  render() {
    return (
      <form onSubmit={this.addCarte}>
        <TextField
          value={this.state.nomCarte}
          onChange={this.addNom}
          type="text"
          placeholder="Nom de la Carte"
        />
        <TextField
          value={this.state.num}
          onChange={this.addNum}
          type="text"
          placeholder="Numero de la Carte"
        />
        <TextField
          value={this.state.expiration}
          onChange={this.addExp}
          type="month"
          placeholder="Date d'expiration"
        />

<KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/yyyy"
          label="Expiration date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <button> Confirmer </button>
      </form>
    );
  }
}

export default CarteForm;
