import React from 'react';
//import './App.css';
import Title from './Title';
import Formulario from './Formulario';
import Lista from './List';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []			
		};
	}

	componentWillMount() {
		fetch("http://10.40.0.241:3030/")
			.then(response => response.json())
			.then(data => this.setTasks(data));
	}


	setTasks = data => {
		for (let i = 0; i < data.length; i++) {
			this.state.tasks.push(data[i].task);
		}
		this.setState({
			tasks: this.state.tasks
		});
	};

	addTask = task => {
		this.state.tasks.push(task);
		this.setState({	
			tasks: this.state.tasks
		});
		fetch('http://10.40.0.241:3030/', {
			method: 'POST',
			body: '{"task":"'+task+'"}'
		});	
	}

	removeTask = id_task => {
		this.state.tasks.splice(id_task, 1);
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
					<Lista tasks={this.state.tasks} removeTask={this.removeTask} />
				</fieldset>
			</div>
  		);
	}
}
export default App;
