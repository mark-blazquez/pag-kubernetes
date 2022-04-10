import React, { Component } from "react";
class Formulario extends React.Component {

			constructor(props) {
				super(props);
				this.state = { pollo: '' };
				this.state = { patatas: '' };
				this.state = { nombre: '' };

			}

			handleChange = (event) => {
				this.setState({ [event.target.name]: event.target.value });
			}

			handleSubmit = (event) => {
				alert('A form was submitted: ' + this.state);

				fetch('http://localhost:3000/api', {
					method: 'POST',
					// We convert the React state to JSON and send it as the POST body
					body: JSON.stringify(this.state)
				}).then(function (response) {
					console.log(response)
					return response.json();
				});

				event.preventDefault();
			}
 
		render(){
			return(
				<form className="container" name="formulario">
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">pollo</label>
						<input type="number" value={this.state.value} className="form-control" id="pollo" placeholder="....." />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">patatas</label>
						<input type="number" value={this.state.value} className="form-control" id="patatas" placeholder="......" />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">nombre</label>
						<input type="text" value={this.state.value} className="form-control" id="nombre" placeholder="....." />
					</div>
					<button type="submit" className="btn btn-primary" value="Submit">registrar</button>
				</form>
			)
		}
				

}
export default Formulario;