import React, { Component } from "react";
import logo1 from '../imagenes/logo1.png';

class CuerpoIndex extends React.Component {
	render(){
		return (

			<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
				<img src={logo1} class="img-fluid"></img>

				<div class="col-md-5 p-lg-5 mx-auto my-5">
					<h1 class="display-4 font-weight-normal">Gastro Asador</h1>
					<p class="lead font-weight-normal">Calidad desde el 97</p>
				</div>

			</div>

		)
	}
}
export default CuerpoIndex;