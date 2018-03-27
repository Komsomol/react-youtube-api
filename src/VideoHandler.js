import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

export class VideoDataHandler extends Component {

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
