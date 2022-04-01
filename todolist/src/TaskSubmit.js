import Icon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

class  TaskSubmit extends React.Component {
	constructor (props) {
		super(props);
		this.state ={

		}
	}

	render() {
		return (
			<Tooltip title="Add" >
				<Button variant="contained" color="success" onClick={this.props.HandleOnSubmit}>
					<Icon/>
				</Button>
			</Tooltip>
		);
	}
}
export default TaskSubmit;
