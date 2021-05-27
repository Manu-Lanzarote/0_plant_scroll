import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

//Importación de BrowserRouter aquí, en index.js para que Router envuelva mi app y así me ahorro importarlo y usar la etiqueta Router en los componentes donde tenga que hacer enrutamientos, como por ejemplo en la lista donde tengo el menú de navegación.
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
