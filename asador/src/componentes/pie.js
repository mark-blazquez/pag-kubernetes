import React, { Component } from "react";
class Pie extends React.Component {
	render(){
		return(
			<footer class="pt-4 my-md-5 pt-md-5 border-top">
				<div class="row">
					<div class="col-12 col-md">
							<small class="d-block mb-3 text-muted">Mark Blazquez © 2022</small>
					</div>
					<div class="col-6 col-md">
						<h5>Horario</h5>
						<ul class="list-unstyled text-small">
							<li><a class="text-muted" href="#">9.30:16.00</a></li>
							
						</ul>
					</div>
					<div class="col-6 col-md">
						<p ><strong>¿Necesitas ayuda?</strong>&nbsp;¡Contáctanos!&nbsp;</p>
						<p>555 333 777</p>
					</div>
				</div>
			</footer>
						
	  )

	}
}
export default Pie;