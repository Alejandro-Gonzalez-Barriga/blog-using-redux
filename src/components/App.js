import React, {Component} from "react";

class App extends Component {
   ponerFilas = () => [
    <tr>
      <td>AlexG</td>
      <td>alxg@gmail.com</td>
      <td>alexg.com</td>
    </tr>,
    <tr>
      <td>AlexG</td>
      <td>alxg@gmail.com</td>
      <td>alexg.com</td>
    </tr>
  ];
  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
}

export default App;
