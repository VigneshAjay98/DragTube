import React from 'react';

import '../style/style.css';

const VideoItem = ({video, onVideoSelect}) => {

	return (
			<div style={{display: 'flex', alignItems: 'center', padding: '20px', cursor: 'pointer', borderBottom: '1px solid'}} onClick={() => onVideoSelect(video)}>
				<img style={{ marginRight: '20px', height: '80px', width: '150px'}} alt="thumbnail" src={`https://i.ytimg.com/vi/${video.id.videoId}/mqdefault.jpg`} />
				<h4 ><b>{video.snippet.title}</b></h4>
			</div>
					
		);
}

export default VideoItem;