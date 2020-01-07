import React from "react";
import { Link } from "reac-router-dom";

const Menu = props => (
  <nav id="menu">
    <Link to="/">Usuarios</Link>
    <Link to="/tareas">Tareas</Link>
  </nav>
);

export default Menu;
