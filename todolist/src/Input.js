import React from 'react';

class Input extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: ""
		}
	}

	handleChange(event){
		console.log(event.target.value);
		this.setState({
			value: event.target.value
		});
	}

	render(){
		let l = this.state.value.length;
		return(
			<li>
				<label htmlFor="newTaskInput">Tarea:
					{l < 2 && <p>Error</p>}
					<input type= "text" id= "newTaskInput" onChange={this.handleChange}/></label>
				<button>Añadir</button>
			</li>
		);
	}
}
export default Input;
