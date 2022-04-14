import React, { Component } from "react";
import logo from './logo.jpg';
class Cabecera extends React.Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand " >
					<img src={logo} className="d-inline-block align-top" width="100" height="100" ></img>la casa del pollo flameante
				</a>
				

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
						</li>
						<li className="nav-item">
						</li>
					</ul>
				</div>

				<div>
					<a className="btn btn-danger " href="/api/auth/google">inicio sesion </a>
				</div>

				<div>
					<form className="container" method="get" action="/api/auth/google" >

						<button type="submit" className="btn btn-danger" >inicio sesion </button>
					</form>
				</div>
			</nav> 
		)
		
	}
}
export default Cabecera;