import React, { Component,MouseEvent,useState, useEffect } from "react";


class Pedidos extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			pedidos:[],
			pollo:"",
			patatas:"",
			nombre:"",
			id: ""
			//bgColor: ""			
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}
	//peticion del json a node
	
	componentDidMount() {
		//funcion para hacer la peticion de forma recursiva a node para los cambios en el json solo recargando esa parte del codigo
		setInterval(() => {
			fetch('http://torre-ubuntu.ddns.net:31059/api/muestra')
			.then(response => response.json())
			.then(res =>{
				//borra el objeto definido anteriormente para que no lo imprima en el front end
				this.setState({pedidos:[] })
				this.setState({pedidos: [...this.state.pedidos, ...res.pedidos]})
			}
		)}, 1000);
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
	/*boxClick = (e) => {
		this.setState({
		  bgColor: "red"
		})
	  }
*/	


	renderPedidos(){
		if (this.state.pedidos.length<=0){
			return <div className="d-flex justify-content-center"> no hay Pedidos</div>
		}else{
			return this.state.pedidos.map((val,key)=>{
				return (
					<div className="d-flex justify-content-center" key={key}> {/*style={{backgroundColor: this.state.bgColor}} onMouseMove={this.boxClick} onmouseout={() => this.handleClick2()}}*/}
							<table class="table">
								<tbody>
									<tr>
										<td><span>Pollo: </span> <span >{val.pollo}</span> </td>
										<td><span> Patatas: </span> <span >{val.patatas}</span> </td>
										<td><span> Nombre: </span> <span >{val.nombre}</span> </td>
									</tr>
								</tbody>
							</table>

						<div >{/*lo que hace es crear un campo oculto con el valor aleatorio definido arriba y pasarlo por formulario para luego declarar el objeto con ese valo y asi poder eliminarlo por id*/}
							<form  className="d-flex" method="POST"  action="http://torre-ubuntu.ddns.net:31059/api/delete" name="google">
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
								<div >
									<button type="submit" className="btn btn-primary" >Borrar</button>
								</div>
								
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
				<div className="d-flex justify-content-center">
					<h2>Pedidos</h2>
				</div>
				<div  >
					{	
						this.renderPedidos()	
					}
				</div>
				

			</div>
		)
	}

}
export default Pedidos;