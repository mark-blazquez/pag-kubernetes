import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component,useState,useEffect } from "react";

{/*import logo from './logos/logo';*/}

function App4() {
	const [data,setData]=useState([]);
	const getData=()=>{
		fetch('./data.json'
		,{
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}
		)
		.then(function(response){
			console.log(response)
			return response.json();
		})
		.then(function(myJson) {
			console.log(myJson);
			setData(myJson)
		});
	}
	useEffect(()=>{
		getData()
	},[])
	return (
		<div className="root">
		{
		data && data.length>0 && data.map((item)=><div className="lista">pollos {item.pollos} patatas {item.patatas} nombre {item.nombre}</div>)
		}
		</div>
  	);

}

export default App4;