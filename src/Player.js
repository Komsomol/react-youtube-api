import React, { Component } from 'react';
import './Player.css';
// import data from './data/data.js';
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
			// console.log(typeof result)
			console.log(result)
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
		if(error){
			return  (
				<div className="flex-container">
					<div> Erorr : {error} </div>
				</div>
				);
		} else if (!isLoaded){
			return  (
				<div className="flex-container">
					<div>Loading...</div>
				</div>
				)
		
		} else {
			return (
				<div className="flex-container">
					<ul>
						{items.map( (song) => {
							return (
									<li key={song[0] + ' / ' + song[1]}>
										<Rank
											rank={song[0]}
										/>
										<Name
											name={song[2]}
										/>
										<Thumbnail
											img={song[4]}
											alt={song[2]}
											video={song[3]}
										/>
				
									</li>
								)
						})}
					</ul>
				</div>
			)
		}
	}
}

class Rank extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.rank}</h1>
			</div>
		)
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


class Thumbnail extends Component {
	render() {
		return (
			<div>
				<img src={this.props.img} alt={this.props.alt}/>
			</div>
		)
	}
}

class Video extends Component {
	render() {
		return (
			<div>
				<ResponsiveEmbed src={"https://www.youtube.com/embed/" +this.props.id+ "?&rel=0&modestbranding=1"} ratio='16:9'/> 
			</div>
		);
	};
}

/* 
*/
export default Player;
