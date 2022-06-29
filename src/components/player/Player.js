import React from 'react';
import Body from '../body/Body';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer'
import './Player.css';
const Player = ({ spotify }) => {
	return (
		<div className='player'>
			<div className='player_body'>
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer />
		</div>
	);
};

export default Player;
