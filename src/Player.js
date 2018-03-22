import React, { Component } from 'react';
import './Player.css';
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
		fetch('https://top-100-billboard.herokuapp.com/genre/')
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

class VideoDataHandler extends Component {

	constructor(props) {

		super(props);

		this.state = {
			rank: this.props.rank,
			song: this.props.song,
			thumbnail: this.props.thumbnail,
			videoId: this.props.id,
			showVideo: false,
		};
		this.clickEvent = this.clickEvent.bind(this);
	}

	clickEvent = () => {
		this.setState({
			showVideo:true
		})
	}

	render(){
		return (
			<div className="holder" onClick={this.clickEvent}>
				<h3>{this.state.rank + '. ' + this.state.song} </h3>
				<VideoHolder
					videoId={this.state.videoId}
					thumbnail={this.state.thumbnail}
					showVideo={this.state.showVideo}
				/>
			</div>
		)
	}
}

class VideoHolder extends Component {
	render(){
		return(
			this.props.showVideo ? <Video video={this.props.videoId} /> : <Image img={this.props.thumbnail} />
		)
	}
}

class Video extends Component {
	render() {
		return (
			<div>
				<ResponsiveEmbed src={"https://www.youtube.com/embed/" +this.props.video+ "?&rel=0&autoplay=1&modestbranding=1"} ratio='16:9'/> 
			</div>
		);
	};
}

class Image extends Component {
	render() {
		return (
			<div>
				<img src={this.props.img} alt={this.props.alt} onClick={this.clickEvent}/>
			</div>
		)
	}
}


export default Player;