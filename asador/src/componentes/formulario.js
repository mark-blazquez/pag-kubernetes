import React, { Component } from "react";
class Formulario extends React.Component { 
	//creamos el onjeto que vamos a pasar a la api vacio 
	constructor(props) {
		super(props);
		this.state = {
			pollo:"",
			patatas:"",
			nombre:""
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	//definimos constantes que van a tener el valor del formulario
	handleInputChange(event) {
		const target = event.target;
		const pollo = target.pollo;
		const patatas = target.patatas;
		const nombre = target.nombre;
		//creamos el objetol que vamos a pasar a la api pero esta vez con sus valores 

		this.setState({
			pollo: pollo,
			patatas: patatas,
			nombre: nombre
		}
	);
}
	//creamos el formulario de forma grafica
	  
	render(){
		return (
			<form className="container" method="POST" action="/nuevo" name="formulario">
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">pollo</label>
					<input type="number" className="form-control" name ="pollo"   placeholder="....." />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">patatas</label>
					<input type="number" className="form-control" name ="patatas" placeholder="......" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">nombre</label>
					<input type="text" className="form-control" name ="nombre" placeholder="....." />
				</div>
				<button type="submit" className="btn btn-primary" >registrar</button>
			</form>
		)
	}
				

}
export default Formulario;