import axios from "axios";
import { TRAER_TODAS, LOADING, ERROR } from "../types/tareasTypes";

export const traerTodas = () => async dispatch => {
  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({
      type: LOADING
    });
    dispatch({
      type: TRAER_TODAS,
      payload: respuesta.data
    });
  } catch (error) {
    console.log("Error:", error.message);
    dispatch({
      type: ERROR,
      payload: "Upps, something went wrong, to do's info not available "
    });
  }
};
