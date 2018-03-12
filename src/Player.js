import React, { Component } from 'react';
import data from './data/data.js'

class Player extends Component {
	render() {
		return (
			<ul>
				{data.map(function(name, index){
					return <div className="Player">
						<iframe title="video" width="560" height="315" src={"https://www.youtube.com/embed/" + name.link} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
					</div>
				})}
			</ul>
		);
	}
}

export default Player;
