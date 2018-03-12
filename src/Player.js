import React, { Component } from 'react';
import data from './data/data.js';

class Player extends Component {
	render() {
		return (
			<ul>
				{data.map( (video) => {
					return (
						<div>
							<Name
								name={video.name}
							/>
							<Date
								date={video.date}
							/>
							<div className="Player">
								<iframe title="video" width="560" height="315" src={"https://www.youtube.com/embed/" + video.link} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
							</div>
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
