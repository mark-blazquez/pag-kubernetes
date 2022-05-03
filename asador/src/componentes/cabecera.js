import React, { Component } from "react";
import logo from './logo.jpg';
class Cabecera extends React.Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
				<div className="navbar-brand d-flex" >
					<img src={logo} className=" rounded-circle" width="100" height="100" ></img>
				</div> 
				<div>
					<h1 className="text-light">La casa del pollo flameante</h1>
				</div>
				<div >
					<a className="btn btn-danger " href="http://10.108.18.16:8080/api/auth/google">Iniciar sesion </a>
				</div>
	  		</nav> 
		)	
	}
}
export default Cabecera;