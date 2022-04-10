import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Cabecera from './componentes/cabecera';
import Formulario from './componentes/formulario';
import Pedidos from './componentes/pedidos';

import Pie from './componentes/pie';



function App() {

	return (
		<div>
			<Cabecera />
			<Formulario />
			<Pedidos />
			<Pie />
		</div>
	);

}


export default App;
