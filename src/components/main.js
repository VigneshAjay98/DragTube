import React from 'react';
import axios from 'axios';
import {useState} from 'react';

import Player from './player';
import List from './list';

import searchIcon from '../icons/search-50.png';
import logo from '../icons/logo.png';
import '../style/style.css';

export const Main = props => {

	const [search, setSearch] = useState('');
	const [state, setState] = useState({videos: [], selectedVideo: null});

	const handleChange = event => {
		setSearch(event.target.value);
	}

    const handleClick = () => {
    	console.log('Click handler rendered');
    	axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=AIzaSyDPDqdAno9FVe_MpHLtxD0OMYDap4ThbfQ`)
		.then(response => {
						console.log(response); 
						setState({videos: response.data.items, selectedVideo: response.data.items[0]})
						})
		.catch(error => console.log(error))
	}

	const onVideoSelect = video => {
		console.log('onVideoSelect rendered');
		return setState({...state, selectedVideo: video});
	}

	return (
		<div>
          	<div className="searchBar">
          		<div className="brand">
          			<img src={logo} alt="logo" style={{marginTop: '27px', backgroundColor: 'red', borderRadius: '7 px'}} />
          			<h1>DragTube</h1>
          		</div>
          		<div className="search">
          			<input type="text" placeholder="Search" onChange={handleChange} />
			    	<img src={searchIcon} onClick={handleClick} alt="search" />
          		</div>
          	</div>
          	<div className="content">
          		<div className="player">
        			<Player video={state.selectedVideo} />
	          	</div>
        		<div className="list">
        			<List videos={state.videos} onVideoSelect={onVideoSelect} />
        		</div>
          	</div>
	    </div>
		);

}

