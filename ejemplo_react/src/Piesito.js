import './Piesito.css';
import React from 'react';

class Piesito extends React.Component
{
	constructor(props) {
		super(props);
    	this.state = {
      		time: new Date().toLocaleString()
    	};
	}
  	componentDidMount() {
    	this.intervalID = setInterval(() => this.tick(),1000);
  	}
  	componentWillUnmount() {
    	clearInterval(this.intervalID);
  	}
  	tick() {
    	this.setState({
      		time: new Date().toLocaleString()
    	});
  	}  
	
	render() {
		return (
			<footer>
				<p>La mama de Piesito (la que se muere)</p>
      			<p className="App-clock">
        			{this.state.time}
      			</p>
			</footer>
		);
	}
}
export default Piesito;
