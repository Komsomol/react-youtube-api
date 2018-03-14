import React, { Component } from 'react';
import './Player.css';
import data from './data/data.js';
import ResponsiveEmbed from 'react-responsive-embed';




class Player extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			error:null,
			isLoaded:false,
			items:[]
		};
	}

	componentDidMount(){
		fetch('http://top-100-billboard.herokuapp.com/data/')
		.then(response => response.json())
		.then(result => {
			console.log(typeof result)
			this.setState({
				isLoaded: true,
				items: result
			},
			(error) => {
				this.setState({
					isLoaded :true,
					error:error
				})
			})
		})
	}

	render() {
		const {error, isLoaded, items} = this.state;
		console.log(items);
		if(error){
			return  (<div> Erorr : {error} </div>);
		} else if (!isLoaded){
			return  (<div>Loading...</div>)
		} else {
			return (
				<ul>
					{items[0]}
				</ul>
			)
		}
	}
}

class Name extends Component {
	render() {
		return (
			<div>
				<h3> {this.props.name} </h3>
			</div>
		)
	}
}

class Date extends Component {
	render() {
		return (
			<div>
				<p>{this.props.date} </p>
			</div>
		)
	}
}


					// {items.map( (song) => {
					// 	return (
					// 		<div className="flex-container">
					// 			<ResponsiveEmbed src={"https://www.youtube.com/embed/" + song.id} ratio='16:9'/>
					// 			<Name
					// 				name={song.title}
					// 			/>
					// 			<Date
					// 				date={song.rank}
					// 			/>
					// 		</div>
					// 		)
					// })}

export default Player;
