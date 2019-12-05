import React from 'react';
import ReactDOM from 'react-dom';

function App(){
	return(
		<div>
			<Lottery />
		</div>
	)
}

class Lottery extends React.Component{
	constructor(){
		super();{
		this.state ={
			lottery: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(state => {
			if(state.lottery === true){
				return {lottery : false}
			} else {
				return {lottery: true}
			}
		})
	}

	render(){
		if(this.state.lottery){
			return (
				<div>
					<button onClick = {handleClick}>Clickme</button>
					<h1>You have made the change.</h1>			
				</div>
			)
		} else {
			return (
				<div>
					<button onClick = {handleClick}>Clickme</button>
					<h1>Click once again to make change.</h1>			
				</div>
			)
		}
		
	}
}
}