import React from "react";

const Client = ({ details, onDelete }) => (
  <li>
    {details.nom} <button onClick={() => onDelete(details.id)}>x</button>
  </li>
);

export default Client;
