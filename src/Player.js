import React, { Component } from 'react';
import './Player.css';
import data from './data/data.js';
import ResponsiveEmbed from 'react-responsive-embed';

class Player extends Component {
	render() {
		return (
			<ul>
				{data.map( (video) => {
					return (
						<div className="flex-container">
							<ResponsiveEmbed src={"https://www.youtube.com/embed/" + video.link} ratio='16:9'/>
							<Name
								name={video.name}
							/>
							<Date
								date={video.date}
							/>
						</div>
						)
				})}
			</ul>
		);
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

export default Player;
