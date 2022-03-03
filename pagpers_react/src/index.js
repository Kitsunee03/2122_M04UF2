import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cabecera from './Cabecera';
import Menu from './Menu';
import Formulario from './Formulario';
import MenuLateral from './MenuLateral';
import Piesesito from './Piesesito';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
 	<Cabecera />
	<Menu />
	<Formulario />
	<MenuLateral />
	<Piesesito />
 </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
