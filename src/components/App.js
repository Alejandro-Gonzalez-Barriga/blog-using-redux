import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Usuarios from "./Usuarios/index";

import Menu from "./Menu";

const App = () => (
  <BrowserRouter>
    <Menu />
    <Usuarios />
    <Route exact path="/"></Route>
  </BrowserRouter>
);

export default App;
