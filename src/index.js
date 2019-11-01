import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
import Carte from "./Carte";
import CarteForm from "./CarteForm";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "haha" },
      { id: 2, nom: "hihi" },
      { id: 3, nom: "hoho" }
    ],

    cartes: [{ nom: "coucou", num: 1234567890, exp: new Date().getTime}]
  };

  handleDelete = id => {
    const clients = [...this.state.clients];
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };

  handleAddClient = client => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });
  };

  handleAddCarte = carte => {
    const cartes = [...this.state.cartes];
    cartes.push(carte);

    this.setState({ cartes });
  };

  render() {
    const title = "Liste clients";

    return (
      <div>
        <h1> {title} </h1>

        <ul>
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAddClient} />

        {this.state.cartes.map(carte => (
          <Carte details={carte} />
        ))}
        <CarteForm onCarteAdd={this.handleAddCarte} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
