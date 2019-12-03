import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function App(){
	return (
		<div className="app">
			<h1>We would like you to welcome to the city of San Francisco!!!</h1>
			<h2>Welcome to public transit Schedule app.</h2>
			<Schedule bus="city bus" train1 = "bart" train2="cal-train"/>

			<br />
			<br />
			<h1>Use following option to purchase ticket.</h1>
			<Counter />
		</div>
	)
}


class Schedule extends React.Component{
	constructor(){
		super();
		this.state = {
			weekday: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState ( state => {
				if(state.weekday === true){
					return {weekday :false}
				} else {
					return {weekday : true}
				}
		})
	}

	render(){
		const weekdayBus = "10am to 10pm";
		const weekdayTrain1 = "9am to 9pm";
		const weekdayTrain2 = "9am to 11pm";

		const weekendBus = "1pm to 9pm";
		const weekendTrain1 = "11am to 7pm";
		const weekendTrain2 = "10am to 11pm";

		if(this.state.weekday){
			return (
				<div className="schedule">
					<h1>You are viewing schedule for the weekday.</h1>
					<br />
					<br />
					<h3>{this.props.bus} {weekdayBus}</h3>
					<h2>{this.props.train1} {weekdayTrain1}</h2>
					<h2>{this.props.train2} {weekdayTrain2}</h2>
					<button onClick={this.handleClick}>Click for weekend Schedule</button>
				</div>
			)
		} else {
			return (
				<div className="schedule">
					<h1>You are viewing schedule for the weekend.</h1>
					<br />
					<br />
					<h3>{this.props.bus} {weekendBus}</h3>
					<h3>{this.props.train1} {weekendTrain1}</h3>
					<h3>{this.props.train2} {weekdayTrain2}</h3>
					<button onClick={this.handleClick}>Please don't click me</button>
				</div>
				
			)
		}
	
	}
}

class Counter extends React.Component{
	constructor(){
		super();
		this.state = {
			count : 0
		}
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}

	increment(){
		this.setState(state => ({
			count : state.count + 1
		}))
	}

	decrement(){
		this.setState(state => ({
			count : state.count -1
		}))
	}

	reset(){
		this.setState(state => ({
			count: 0
		}))
	}

	render(){
		return(
			<div className="counter">
				<button onClick={this.increment}>add to cart</button> <h1>{this.state.count}</h1>
				<button onClick={this.decrement}>remove from cart</button>
				<button onClick={this.reset}>reset</button>
			</div>
		)
	}
}
ReactDOM.render(<App />,document.getElementById('root'));