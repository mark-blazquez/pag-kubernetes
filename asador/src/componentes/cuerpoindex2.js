import React, { Component } from "react";
import cara1 from '../imagenes/cara1.jpeg';
import cara2 from '../imagenes/cara2.jpeg';
import cara3 from '../imagenes/cara3.jpg';


class CuerpoIndex2 extends React.Component {
	render(){
		return (
			<div> 
				<div className="d-flex justify-content-center">
					<h3>Opinion de los clientes</h3>
				</div>
				<div class="container ">
					<div class="row d-flex justify-content-center">
						<div class="card col-lg-3 col-12 m-2 ">
							<h5 class="card-header d-flex justify-content-center">
								<img src={cara1} class="rounded-circle"  alt="Generic placeholder image" width="130" height="130"></img>
							</h5>
							<div class="card-body">
								<h5 class="card-title d-flex justify-content-center">Pepe</h5>
								<p class="card-text d-flex justify-content-center">Los mejores pollos, olee</p>
							</div>
						</div>
						<div class="card col-lg-3 col-12 m-2">
							<h5 class="card-header d-flex justify-content-center">
								<img src={cara2} class="rounded-circle"  alt="Generic placeholder image" width="140" height="140"></img>
							</h5>
							<div class="card-body">
								<h5 class="card-title d-flex justify-content-center">Evaristo</h5>
								<p class="card-text d-flex justify-content-center">Este pollo es a las papilas gustativas lo que el renacimiento al arte, el cenit </p>
							</div>
						</div>
						<div class="card col-lg-3 col-12 m-2">
							<h5 class="card-header d-flex justify-content-center">
								<img src={cara3} class="rounded-circle"  alt="Generic placeholder image" width="140" height="140"></img>
							</h5>
							<div class="card-body">
								<h5 class="card-title d-flex justify-content-center">Maria</h5>
								<p class="card-text d-flex justify-content-center">meh</p>
							</div>
						</div>
					</div>
					
				</div>
				
				
			</div>
		)
	}
}
export default CuerpoIndex2;