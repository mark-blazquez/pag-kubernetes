import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Cabecera from './componentes/cabecera';
import Formulario from './componentes/formulario';
import Pie from './componentes/pie';


function App() {
	const [data, setData] = React.useState(null);

	return (
	<div>
      <Cabecera />
      <Formulario />

	  <Pie />
    </div>
	);

}


export default App;
