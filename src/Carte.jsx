import React from "react";

const Carte = ({details}) => (
  <ul>
    <li>{details.nom}</li>
    <li>{details.num}</li>
    <li>{details.exp}</li>
  </ul>
);

export default Carte;
