import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Cabecera from './componentes/cabecera';
import Pie from './componentes/pie';
import CuerpoIndex from './componentes/cuerpoindex';



function App() {

	return (
		<div>
			<Cabecera />
			<CuerpoIndex/>
			<Pie />
		</div>
	);

}


export default App;
