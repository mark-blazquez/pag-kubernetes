import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Cabecera from './componentes/cabecera';
import Pie from './componentes/pie';
import CuerpoIndex from './componentes/cuerpoindex';
import Cuerpoindex2 from './componentes/cuerpoindex2';




function App() {

	return (
		<div>
			<Cabecera />
			<CuerpoIndex/>
			<Cuerpoindex2/>
			<Pie />
		</div>
	);

}


export default App;
