import React from 'react';

import Input from './Input';
import TaskSubmit from './TaskSubmit';

class  Formulario extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			task: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.addTask(this.state.task);

		this.state.task = "";
		this.setState({
			task: this.state.task
		})
	}
	handleChange = event => {
		this.setState({
			task: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<Input value={this.state.task} handleChange={this.handleChange} />
				<TaskSubmit HandleOnSubmit={this.handleSubmit} />
			</form>
		);
	}
}
export default Formulario;
