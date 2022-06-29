import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { BiSearch } from 'react-icons/bi';
import { useDataLayerValue } from '../DataLayer';

const Header = () => {
	const [{ user }, dispatch] = useDataLayerValue();
	return (
		<div className='header'>
			<div className='header_left'>
				<BiSearch />
				<input
					placeholder='Search for Artists, Songs, or Podcasts'
					type='text'
				/>
			</div>

			<div className='header_right'>
				<Avatar src={user?.images[0]?.url} alt={user} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
};

export default Header;
