import React, { Component } from "react";
import logo from '../imagenes/logo.jpg';
class Cabecera extends React.Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
				<div class="collapse navbar-collapse col-lg-12  " >
						<div className=" collapse navbar-collapse navbar-brand d-flex justify-content-center" >
							<img src={logo} className=" rounded-circle" width="100" height="100" ></img>
						</div> 
						<div className=" collapse navbar-collapse navbar-brand d-flex justify-content-center"  >
							<h1 className="text-light">La casa del pollo flameante</h1>
						</div>
						<div className=" collapse navbar-collapse navbar-brand d-flex justify-content-center" >
							<a className="btn btn-danger " href="http://10.108.18.16:8080/api/auth/google">Iniciar sesion </a>
						</div>
				</div>

				<div className="col-12 ">
					<div class=" "  >
						<div className="d-flex justify-content-center">
							<img src={logo} className=" rounded-circle d-flex justify-content-center" width="100" height="100" ></img>
						</div>
					</div>
					<div class=""  >
						<h1 className="text-light d-flex justify-content-center">La casa del pollo flameante</h1>
					</div>
					<div class=""  >
						<div className="d-flex justify-content-center">
							<a className="btn btn-danger  " href="http://10.108.18.16:8080/api/auth/google">Iniciar sesion </a>
						</div>
					</div>
				</div>
			</nav> 
		)	
	}
}
export default Cabecera;