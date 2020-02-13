import axios from "axios";
import { TRAER_TODAS, LOADING, ERROR } from "../types/tareasTypes";

export const traerTodas = () => async dispatch => {
  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
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
    //console.log(tareas);

    dispatch({
      type: LOADING
    });
    dispatch({
      type: TRAER_TODAS,
      payload: tareas
    });
  } catch (error) {
    //console.log("Error:", error.message);
    dispatch({
      type: ERROR,
      payload: "Upps, something went wrong, to do's info not available "
    });
  }
};
