import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../general/Spinner";
import Tabla from "./Tabla";
import Fatal from "../general/Fatal";

import * as usuariosActions from "../../actions/usuariosActions";

class Usuarios extends Component {
  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.traerTodos();
    }
  }
  ponerContenido = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal messege={this.props.error} />;
    }
    return <Tabla />;
  };

  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        {this.ponerContenido()}
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
