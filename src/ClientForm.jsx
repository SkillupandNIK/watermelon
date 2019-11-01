import React, { Component } from "react";
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class ClientForm extends Component {
  state = { nouveauClient: "" };

  handleChange = event => {
    this.setState({ nouveauClient: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;
    this.props.onClientAdd({ id, nom });
    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.nouveauClient}
          onChange={this.handleChange}
          
          placeholder="Ajouter Client"
        />
        <button> Confirmer </button>
      </form>
    );
  }
}

export default ClientForm;
