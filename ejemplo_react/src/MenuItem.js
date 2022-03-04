import React from 'react';

class MenuItem extends React.Component
{
	constructor (props) {
		super(props);
		this.state ={
			contador: 0	
		};
	}
	render() {
		return(
			<li> 
				<a href={this.props.url}onClick={
					(e) => {
						e.preventDefault();
						this.setState({
							contador: this.state.contador+1
						});
					}
				}>{this.props.text}</a>
				
				{this.state.contador}
			</li>
		);
	}
}
export default MenuItem;
