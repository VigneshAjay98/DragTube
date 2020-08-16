import React from 'react';

import VideoItem from './video';
import '../style/style.css';

const List = ({videos, onVideoSelect}) => {

	const listVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)

	return (
		<>
			{listVideos}
		</>
		);
}

export default List;