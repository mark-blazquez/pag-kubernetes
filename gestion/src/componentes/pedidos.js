import React, { Component } from "react";


class Pedidos extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			pedidos:[]
		}
	}
	componentDidMount() {

		fetch('http://localhost:3000/api')
			.then(response => response.json())
			.then(res =>{
				this.setState({pedidos: [...this.state.pedidos, ...res.pedidos]})}
			)
	}

	renderPedidos(){
		if (this.state.pedidos.length<=0){
			return <div>no hay Pedidos</div>
		}else{
			return this.state.pedidos.map((val,key)=>{
				return <div key={key}> <span>pollos </span>{val.pollo} <span> patatas </span> {val.patatas}<span> nombre </span>{val.nombre}</div>
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