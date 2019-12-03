import React from 'react';
import ReactDOM from 'react-dom';

function App(){
	return(
		<div>
			<Schedule bus="citybus" train1="caltrain" train2="bart"/>
		</div>
	)
}

class Schedule extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nightBus : true
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState((state) => {
			if(state.nightBus === true){
				return {nightBus: false}
			} else {
				return {nightBus : true}
			}
		})
	}

	render(){
		const weekDayBus = "5am to 11pm";
		const weekDayTrain1 = "4:30am to 9:30pm";
		const weekDayTrain2 = "5am to 11pm";

		const weekendBus = "5am to 11pm";
		const weekendTrain1 = "9am to 6pm";
		const weekendTrain2 = "9am to 9pm";
		if(this.state.nightBus){
			return (
				<div>
					<button onClick = {this.handleClick}>weekend schedule for the city.</button>
					<h1>***************You are viewing schedule for the weekday.*********************</h1>
					<h1> {this.props.bus} - {weekDayBus}</h1>
					<h1>{this.props.train1} {weekDayTrain1}</h1>
					<h1>{this.props.train2} {weekDayTrain2}</h1>
				</div>
			);
		} else {
			return (
				<div>
					<button onClick = {this.handleClick}>See schedule for the weekday.</button>
					<h1>***************You are viewing the schedule of public transit for the weekend*************</h1>
					<h1>{this.props.bus} {weekendBus}</h1>
					<h1>{this.props.train1} {weekendTrain1}</h1>
					<h1>{this.props.train2} {weekendTrain2}</h1>
				</div>
			);
		}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
