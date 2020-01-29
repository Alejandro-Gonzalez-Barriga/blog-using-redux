import axios from "axios";
import { TRAER_TODOS, LOADING, ERROR } from "../types/publicacionesTypes";
import usuariosReducer from "../reducers/usuariosReducer";

export const traerTodos = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data
    });
  } catch (error) {
    console.log("Error:", error.message);
    dispatch({
      type: ERROR,
      payload: "Upss, something went wrong"
    });
  }
};

export const traerPorUsuario = key => async (dispatch, getState) => {
  const { usuarios } = getState().usuariosReducer;
  const usuario_id = usuarios[key].id;

  const respuesta = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`
  );
  dispatch({
    type: TRAER_TODOS,
    payload: respuesta.data
  });
};
