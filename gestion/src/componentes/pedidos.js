import React, { Component } from "react";


class Pedidos extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			pedidos:[],
			pollo:"",
			patatas:"",
			nombre:"",
			id: ""
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	componentDidMount() {
		fetch('http://localhost:3000/api')
			.then(response => response.json())
			.then(res =>{
				this.setState({pedidos: [...this.state.pedidos, ...res.pedidos]})
			}
		)
	}
	
	handleInputChange(event) {
		const target = event.target;
		const pollo = target.pollo;
		const patatas = target.patatas;
		const nombre = target.nombre;
		const id = target.id;

		//creamos el objetol que vamos a pasar a la api pero esta vez con sus valores recuperados del form 

		this.setState({
			pollo: pollo,
			patatas: patatas,
			nombre: nombre,
			id: id
		}
	)}
	

	renderPedidos(){
		if (this.state.pedidos.length<=0){
			return <div>no hay Pedidos</div>
		}else{
			return this.state.pedidos.map((val,key)=>{
				return (
					<div className="d-flex" key={key}>
						<div>
							<span>pollos </span>{val.pollo} <span> patatas </span> {val.patatas}<span> nombre </span>{val.nombre}
						</div>
						<div>{/*lo que hace es crear un campo oculto con el valor aleatorio definido arriba y pasarlo por formulario para luego declarar el objeto con ese valo y asi poder eliminarlo por id*/}
							<form className="d-flex" method="POST" action="/api/delete" name="google">
								<div className="form-group d-none">
									<label >pollo</label>
									<input type="number" className="form-control" name="pollo" value={val.pollo}/>
								</div>
								<div className="form-group d-none">
									<label >patatas</label>
									<input type="number" className="form-control" name="patatas" value={val.patatas} />
								</div>
								<div className="form-group d-none">
									<label >nombre</label>
									<input type="text" className="form-control" name="nombre" value={val.nombre}/>
								</div>
								<div className="form-group  d-none"> 
									<label >id</label>
									<input type="number" className="form-control" name="id" value={val.id}  />
								</div>
								<button type="submit" className="btn btn-primary" >borrar</button>
							</form>
						</div>
					</div>
				)
			})
		}		
	}


	render(){
		return (
			<div className="container">
				<h2>pedidos</h2>
				{this.renderPedidos()}
			</div>
		)
	}

}
export default Pedidos;