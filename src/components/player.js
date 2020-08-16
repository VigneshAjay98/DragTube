import React from 'react';

import '../style/style.css';

const Player = ({video}) => {

	if(!video) {return <div>Search something...</div>}

	console.log(video.id.videoId);

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<>
			<div className="embedFrame">
				<iframe frameBorder="0" height="100%" width="90%" title="Video Player" src={videoSrc}></iframe>
			</div>
			<div className="details">
				<h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
				<h3>{video.snippet.channelTitle}</h3>
				<h3>{video.snippet.description}</h3>
			</div>
		</>
		);
}

export default Player;