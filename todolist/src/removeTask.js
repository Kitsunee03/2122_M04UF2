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
			<button onClick={this.HandleOnRemove}>Eliminar</button>
		);
	}
}
export default RemoveTask;
