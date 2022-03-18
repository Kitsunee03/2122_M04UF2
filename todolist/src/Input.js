import React from 'react';

class Input extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: props.value
		};
	}

	handleChange = (event)=> {
		this.props.handleChange(event);
		this.setState({
			value: event.target.value
		});
	}

	render(){
		return(
			<label htmlFor="newTaskInput">Tarea:
				<input type= "text" id= "newTaskInput" onChange={this.handleChange}/>
			</label>
		);
	}
}
export default Input;
