//Libreria React ... Permite crear la logica
// Anda a nodemodules, busca react e importalo a esta hoja
import React from 'react';

//Libreria de ReactDOM ... Permite mostrarlo en la web
import ReactDOM from 'react-dom/client';

//Importamos el componente App
import App from './App';

//Importamos el css

import './estilos.css';


//Mostrar el app en el DOM
//Crea un punto inicial (root) en donde la app se va a dibujar
const root = ReactDOM.createRoot (document.getElementById ('root'));

//Ejecuta la aplicación
root.render(<App />);








/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */
