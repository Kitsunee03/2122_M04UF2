import TextField from '@mui/material/TextField';
import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value
		};
	}

	handleChange = event => {
		this.props.handleChange(event);
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return(
			<TextField label="Tarea" size="small" variant="filled" 
					onChange={this.handleChange} value={this.props.value} />
		);
	}
}
export default Input;
