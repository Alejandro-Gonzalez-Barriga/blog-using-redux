import React from "react";
import { connect } from "react-redux";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";

const Comentarios = props => {
  if (props.com_error) {
    console.log(props.com_error);
    return <Fatal message={props.com_error} />;
  }
  if (props.com_loading && !props.comentarios.length) {
    console.log("spinner");
    return <Spinner />;
  }

  const ponerComentarios = () =>
    props.comentarios.map(comentario => (
      <li key={comentario.id}>
        <b>
          <u>{comentario.email}</u>
        </b>
        <br />
        {comentario.body}
      </li>
    ));

  return <ul>{ponerComentarios()}</ul>;
};

const mapStateToProps = ({ publicacionesReducer }) => publicacionesReducer;

export default connect(mapStateToProps)(Comentarios);
