import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

class RemoveTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: "",
			index: props.index
		};
	}

	HandleOnRemove = (event) => {
		this.props.handleOnRemove(this.state.index);
	}
	
	render() {
		return(
			<Button variant="contained" color="error" endIcon={<DeleteIcon/>} size="small" 
				onClick={this.HandleOnRemove}>Eliminar</Button>
		);
	}
}
export default RemoveTask;
