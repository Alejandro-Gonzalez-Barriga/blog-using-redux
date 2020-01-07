import React from "react";
import { BrouserRouter, Route } from "react-router-dom";
import Usuarios from "./Usuarios";

import Menu from "./Menu";

const App = () => (
  <BrouserRouter>
    <Menu />
    <Route exact path="/"></Route>
  </BrouserRouter>
);

export default App;
