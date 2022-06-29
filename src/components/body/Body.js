import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import Header from '../header/Header';
import './Body.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdFavorite, MdMoreHoriz } from 'react-icons/md';
import SongRow from '../songrow/SongRow';

const Body = ({ spotify }) => {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();
	return (
		<div className='body'>
			<Header spotify={spotify} />

			<div className='body_info'>
				<img src={discover_weekly?.images[0].url} alt='' />
				<div className='body_infoText'>
					<strong>PLAYLIST</strong>
					<h2>Discover weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div className='body_songs'>
				<div className='body_icons'>
					<AiFillPlayCircle className='body_shuffle' />
					<MdFavorite  className='favorite'/>
					<MdMoreHoriz />
				</div>
				{/* List of songs */}
         {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
			</div>
		</div>
	);
};

export default Body;
