import axios from 'axios';
import {
  TRAER_TODAS,
  LOADING,
  ERROR,
  CAMBIO_USUARIO,
  CAMBIO_TITULO,
  GUARDAR
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

export const agregar = nueva_tarea => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const respuesta = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      nueva_tarea
    );
    console.log(respuesta.data);
    dispatch({
      type: GUARDAR
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'try again later'
    });
  }
};

export const editar = tarea_editada => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const respuesta = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${tarea_editada.id}`,
      tarea_editada
    );
    console.log(respuesta.data);
    dispatch({
      type: GUARDAR
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'try again later'
    });
  }
};
