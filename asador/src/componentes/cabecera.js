import React, { Component } from "react";
import logo from './logo.jpg';
class Cabecera extends React.Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand " href="#">
					<img src={logo} className="d-inline-block align-top" width="100" height="100" ></img>la casa del pollo flameante
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
						</li>
						<li className="nav-item">
						</li>
					</ul>
				</div>

				<div>
					<form className="container" action="/api/auth/google" >

						<button type="submit" className="btn btn-danger" >inicio de sesion con google</button>
					</form>
				</div>
			</nav> 
		)
		
	}
}
export default Cabecera;