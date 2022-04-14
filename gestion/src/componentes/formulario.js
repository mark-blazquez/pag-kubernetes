import React, { Component } from "react";
class Formulario extends React.Component { 
	//creamos el objeto que vamos a pasar a la api, aqui vacio 
	constructor(props) {
		super(props);
		this.state = {
			pollo:"",
			patatas:"",
			nombre:"",
			id: Math.random()//esto hace un id aleatorio
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	//definimos constantes que van a tener el valor del formulario
	handleInputChange(event) {
		const target = event.target;
		const pollo = target.pollo;
		const patatas = target.patatas;
		const nombre = target.nombre;
		const id = target.id;

		//creamos el objetol que vamos a pasar a la api pero esta vez con sus valores recuperados del form 

		this.setState({
			pollo: pollo,
			patatas: patatas,
			nombre: nombre,
			id: id

		}
	);
}
	//creamos el formulario de forma grafica
	  
	render(){
		return (
			<form className="container" method="POST" action="/api/nuevo" name="formulario">
				<div className="form-group">
					<label >pollo</label>
					<input type="number" className="form-control" name ="pollo"   placeholder="....." />
				</div>
				<div className="form-group">
					<label >patatas</label>
					<input type="number" className="form-control" name ="patatas" placeholder="......" />
				</div>
				<div className="form-group">
					<label >nombre</label>
					<input type="text" className="form-control" name ="nombre" placeholder="....." />
				</div>
				<div className="form-group  d-none"> {/*lo que hace es crear un campo oculto con el valor aleatorio definido arriba y pasarlo por formulario para luego declarar el objeto con ese valor  */}
					<label >id</label>
					<input type="number" className="form-control" name ="id" value={this.state.id}  />
				</div>
				<button type="submit" className="btn btn-primary" >registrar</button>
			</form>
		)
	}
				

}
export default Formulario;