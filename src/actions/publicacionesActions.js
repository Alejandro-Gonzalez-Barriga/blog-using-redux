import axios from "axios";
import { TRAER_POR_USUARIO, LOADING, ERROR } from "../types/publicacionesTypes";
import * as usuariosTypes from "../types/usuariosTypes";

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes;

export const traerPorUsuario = key => async (dispatch, getState) => {
  const { usuarios } = getState().usuariosReducer;
  const { publicaciones } = getState().publicacionesReducer;
  const usuario_id = usuarios[key].id;

  const respuesta = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`
  );

  const publicaciones_actualizadas = [...publicaciones, respuesta.data];

  const publicaciones_key = publicaciones_actualizadas.length - 1;

  const usuarios_actualizados = [...usuarios];

  usuarios_actualizados[key] = {
    //this key comes from the parameter on line 7
    ...usuarios[key],
    publicaciones_key
  }; //publicaciones_key is the place in the new array where the posts that you have
  //already fetched are stored, this is done for efficiancy in the app

  dispatch({
    type: USUARIOS_TRAER_TODOS,
    payload: usuarios_actualizados
  });

  dispatch({
    type: TRAER_POR_USUARIO,
    payload: publicaciones_actualizadas
  });
};
