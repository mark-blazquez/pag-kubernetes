import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

import reportWebVitals from './reportWebVitals';
/*
const express = require ('express');
const app = express();
app.set('port',8080);

//routes

// route /
app.get('/',(req, res)=>{
    res.sendFile('./public/index.html', { root: __dirname });

})
//middleware

//server definition 
app.listen(app.get('port'),()=>{
    console.log ("servidor corriendo en el puerto 8080")
})
*/
ReactDOM.render(
  <React.StrictMode>
		<App/>
		<App2/>
		<App4/>
		<App3/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
