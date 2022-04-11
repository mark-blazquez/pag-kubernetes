import React, { Component } from "react";
class CuerpoIndex extends React.Component {
	render(){
		return (
			<div>
                <p>esto es el index</p>
                <form className="container"  action="/api/auth/google" >
				
				<button type="submit" className="btn btn-danger" >inicio de sesion con google</button>
			</form>

            </div>
		)
	}
}
export default CuerpoIndex;