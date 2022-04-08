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
	
	openDialog = () => {
		this.setState({open: true });
	}

	closeDialog = () => {
		this.setState({open: false});
	}

	removeTask = () => {
		this.props.removeTask(this.props.id_task);
		this.closeDialog();
	}
	
	render() {
		return (
			<div>
				<Button color="error" variant="contained" 
					endIcon=<DeleteIcon /> 
					onClick={this.openDialog}>Eliminar
				</Button>

				<Dialog	open={this.state.open} onClose={this.closeDialog}>
					<DialogTitle>{'Tas seguro??'}</DialogTitle>

					<DialogActions>
						<Button color="error" onClick={this.removeTask}>
							Eliminar!
						</Button>
						<Button onClick={this.closeDialog}>
							Era broma poma
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
export default RemoveTask;
