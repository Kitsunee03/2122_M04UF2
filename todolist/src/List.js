import React from 'react';
import Task from './Task';
import Lista from '@mui/material/List';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: props.tasks
		};
	}

	HandleOnRemove = index => {
		this.state.tasks.splice(index,1);
		this.setState({tasks : this.state.tasks});
	}

	render() {
		let t = this.state.tasks;
		let tasks = [];
		for (let i = 0; i < t.length; i++){
			tasks.push( <Task task={t[i]} key={i} index={i} 
				handleOnRemove={this.HandleOnRemove} />);
		}	
		return ( <Lista> {tasks} </Lista> );
	}
}
export default List;
