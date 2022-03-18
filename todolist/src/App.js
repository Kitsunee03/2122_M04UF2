import React from 'react';
import './App.css';
import Title from './Title';
import Formulario from './Formulario';
import Lista from './List';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: ["Beber Monster","Instalar Linux"]			
		};
	}

	addTask = task => {
		this.state.tasks.push(task);
		this.setState({	
			tasks: this.state.tasks
		});
	}

	render() {
  		return (
    		<div className="App">
				<Title />
				<fieldset>
					<Formulario addTask={this.addTask} />
					<Lista tasks={this.state.tasks} />
				</fieldset>
			</div>
  		);
	}
}
export default App;
