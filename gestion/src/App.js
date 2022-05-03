import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component,useState, useEffect } from "react";
import Cabecera from './componentes/cabecera';
import Formulario from './componentes/formulario';
import Pedidos from './componentes/pedidos';



function App() {
	
	return (
		<div>
			<Cabecera />
			<Formulario />
			<Pedidos />
		</div>
	);

}


export default App;