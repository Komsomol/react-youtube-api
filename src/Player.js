import React, { Component } from 'react';
import './Player.css';
import { VideoDataHandler } from './VideoHandler.js'

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error:null,
			isLoaded:false,
			items:[],
		};
	}

	componentDidMount(){
		fetch(this.props.api)
		.then(response => response.json())
		.then(result => {
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
									<VideoDataHandler key={song[0]}
										rank={song[0]}
										song={song[1]}
										id={song[3]}
										thumbnail={song[4]}
									/>
								)
						})}
					</ul>
				</div>
			)
		}
	}

}


export default Player;