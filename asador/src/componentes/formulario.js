import React, { Component } from "react";
class Formulario extends React.Component {
	render(){
		return <form className="container" method="post "action="/" name="formulario">
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">pollo</label>
						<input type="number" className="form-control" id="pollo"  placeholder="....." />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">patatas</label>
						<input type="number" className="form-control" id="patatas" placeholder="......" />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">nombre</label>
						<input type="text" className="form-control" id="nombre" placeholder="....." />
					</div>
					<button type="submit" onclick="push()" className="btn btn-primary">Submit</button>
					
				</form>
				
	}

}
export default Formulario;