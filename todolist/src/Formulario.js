import React from 'react';

import Input from './Input';
import List from './List';

class  Formulario extends React.Component {
	constructor(props){
		super(props);
	}

	handleSubmit(event){
		event.preventDefault();
		console.log("Click!");
	}

	render(){
		return (
			<fieldset>
				<form onSubmit={this.handleSubmit}>
					<Input/>
					<List/>
				</form>
			</fieldset>
		);
	}
}
export default Formulario;
