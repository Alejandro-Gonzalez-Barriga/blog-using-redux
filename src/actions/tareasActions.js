import axios from 'axios';
import {
  TRAER_TODAS,
  LOADING,
  ERROR,
  CAMBIO_USUARIO,
  CAMBIO_TITULO
} from '../types/tareasTypes';

export const traerTodas = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const respuesta = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );

    const tareas = {};
    respuesta.data.map(
      tar =>
        (tareas[tar.userId] = {
          ...tareas[tar.userId],
          [tar.id]: {
            ...tar
          }
        })
    );

    dispatch({
      type: TRAER_TODAS,
      payload: tareas
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Tareas no disponibles.'
    });
  }
};

export const cambioUsuarioId = valor => dispatch => {
  dispatch({
    type: CAMBIO_USUARIO,
    payload: valor
  });
};

export const cambioTitulo = valor => dispatch => {
  dispatch({
    type: CAMBIO_TITULO,
    payload: valor
  });
};
