var React = require('react'),
	ReactDOM = require('react-dom')


// var Card = React.createClass({
// 	render: function(){
// 		return(
// 			<div className="cardStyle">
// 				<Square/>
// 				<Label/>
// 			</div>
// 		)
// 	}
// })

// var Square = React.createClass({
// 	render: function(){
// 		return(
// 			<div className="square"></div>
// 		)
// 	}
// })

// var Label = React.createClass({
// 	render: function(){
// 		return(
// 			<p className="label">#FF6663</p>
// 		)
// 	}
// })

// var Hello = React.createClass({
// 	render: function(){
// 		return(
// 			<h1 className="word">{this.props.greeting}</h1>
// 		)
// 	}
// })

// var Counter = React.createClass({
// 	getInitialState: function() {
// 		return(
// 			{strikes: 100}
// 		)
// 	},

// 	timerTick: function(){
// 		this.setState({
// 			strikes: this.state.strikes + 100
// 		})
// 	},

// 	componentDidMount: function() {
// 		setInterval(this.timerTick,1000)
// 	},

// 	render: function(){
// 		return(
// 			<h1>{this.state.strikes}</h1>
// 		)
// 	}
// });

// var Label = React.createClass({
// 	render: function(){
// 	return(
// 		<div>
// 			<h1 className="label">Lightning Strikes Per Second</h1>
// 		</div>
// 	)
// }
// })

// var CounterDiv = React.createClass({
// 	render: function(){
// 		return(
// 		<div className="display">
// 			<Counter/>
// 			<Label/>
// 		</div>
// 		)
// 	}
// })


var destination = document.querySelector('#container')

var Counter = React.createClass({
	render: function(){
		var textStyle = {
			fontSize: 70,
			fontFamily: 'sans-serif',
			color: '#333',
			fontWeight: 'bold'

		}
	return (
		<div style={textStyle}>
			{this.props.display}
		</div>
	)
	}
});

var CounterParent = React.createClass({
	getInitialState: function() {
		return{
			count: 0
		}
	},
	increase: function(e){
		this.setState({
			count: this.state.count + 1
		})
	},
	render: function(){
		var backgroundStyle = {
			backgroundColor: '#FFC53A',
			padding: 50,
			width: 250,
			height: 100,
			borderRadius: 10,
			textAlign: 'center'
		}
		var buttonStyle = {
			fontSize: '10px',
			width: 30,
			height: 20,
			fontFamily: 'sans-serif',
			color: '#333',
			fontWeight: 'bold',
			lineHeight: '3px'
		}
	return(
		<div style={backgroundStyle}>
			<Counter display={this.state.count}/>
			<button onClick={this.increase} style={buttonStyle}>+</button>
		</div>
	)
	}
});






ReactDOM.render(
	<div>
		<CounterParent/>
	</div>,
	destination
);