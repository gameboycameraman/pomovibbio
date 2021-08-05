import React, { Component } from 'react';
import Timer from './components/Timer';
import ModalWindow from './components/ModalWindow';
import './App.scss';

class App extends Component {
	constructor(props) {
    super(props);


    this.state = {
      timer: [],
			count: 0,
			focus: 'Work',
			session: 1500,
			break: 300
    }
  }

	componentDidMount = () => {
		this.setState({ count: this.state.count + 1 });
	}

	addTimer = () => {
    this.setState({
      timer: [<Timer time={this.state.session} handleCount={this.handleCount} message={this.state.focus} modal={<ModalWindow reset={this.removeTimer} time={this.state.break} message="Short break! 🧁"/>} />]
    })
  }

	removeTimer = () => {
		this.setState({
      timer: []
    })
	}

	handleFocus = (event) => {
		this.setState({focus: event.target.value});
	}

	handleSession = (event) => {
		this.setState({session: (event.target.value * 60)});
	}
	
	handleBreak = (event) => {
		this.setState({break: (event.target.value * 60)});
	}

	handleCount = () => {
    this.setState({ count: this.state.count + 1 })
		if (this.state.count >= 3) {
			this.setState({ count: 0 })
			this.setState({
				timer: [<Timer time={this.state.session} handleCount={this.handleCount} message={this.state.focus} modal={<ModalWindow reset={this.removeTimer} time={900}  message="Long break! 🥱"/>} />]
			})
		}
  }


	render () {
		return (
			<div className="app">
				<h3 className="center-copy">Welcome to PomoVibbio</h3>
				<p className="center-copy">you're new favourite Pomodoro App.</p>
				<div className="input-field">
					<p>What will you focus on:</p>
					<input type="text" value={this.state.focus} onChange={this.handleFocus}/>
				</div>
				<div className="input-field">
					<p>How many minutes do you want your session to be:</p>
					<input type="text" pattern="[0-9]*" value={this.state.session / 60} onChange={this.handleSession}/>
				</div>
				<div className="input-field">
					<p>How many minutes do you want your break to be:</p>
					<input type="text" pattern="[0-9]*" value={this.state.break / 60} onChange={this.handleBreak}/>
				</div>
				<div className="button-center">
					<button className="button-shape" type="button" onClick={this.addTimer}>Start</button>
					<button className="button-shape" type="button" onClick={this.removeTimer}>Stop</button>
				</div>
				{this.state.timer}
			</div>
		);
	}
}

export default App;

