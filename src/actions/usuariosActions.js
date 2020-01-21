import axios from "axios";
import { TRAER_TODOS, LOADING, ERROR } from "../types/usuariosTypes";

export const traerTodos = () => async dispatch => {
  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: LOADING
    });
    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data
    });
  } catch (error) {
    console.log("Error:", error.message);
    dispatch({
      type: ERROR,
      payload: "Upps, something went wrong please try again later"
    });
  }
};
