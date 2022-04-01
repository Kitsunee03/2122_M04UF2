import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import React from 'react';

class RemoveTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	
	handleOnClick = () => {
		this.setState({open: true });
	}

	handleClose = () => {
		this.setState({open:false});
	}

	handleDelete = () => {
		this.props.removeTask(this.props.task_id);
		this.setState({open:false});
	}
	
	render() {
		return (
			<div>
				<Button color="error" variant="contained" 
					endIcon=<DeleteIcon /> 
					onClick={this.handleOnClick}>Eliminar
				</Button>

				<Dialog	open={this.state.open} onClose={this.handleClose}>
					<DialogTitle>{'Tas seguro??'}</DialogTitle>

					<DialogActions>
						<Button color="error" onClick={this.handleDelete}>
							Eliminar!
						</Button>
						<Button onClick={this.handleClose}>
							Era broma poma
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
export default RemoveTask;
