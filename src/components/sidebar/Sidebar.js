import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { MdLibraryMusic } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { useDataLayerValue } from '../DataLayer';

const Sidebar = () => {
	const [{playlists}, dispatch] = useDataLayerValue()
console.log(playlists);
	return (
		<div className='sidebar'>
			<img
				className='sidebar_logo'
				src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
				alt='logo'
			/>
			<SidebarOption Icon={AiFillHome} title='Home' />
			<SidebarOption Icon={BiSearch} title='Search' />
			<SidebarOption Icon={MdLibraryMusic} title='Your Library' />
			<br />
			<strong className='sidebar_title'>PLAYLISTS</strong>
			<hr />
			{playlists?.items?.map((playlist) =>(
				<SidebarOption title={playlist.name} />
			))}
			
		</div>
	);
};

export default Sidebar;
