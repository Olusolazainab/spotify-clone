import React from 'react';
import './Footer.css';
import {IoPlayCircleOutline } from "react-icons/io5";
import { BiSkipPrevious, BiSkipNext, BiShuffle } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import {Grid, Slider} from '@material-ui/core'
import { MdPlaylistPlay } from "react-icons/md";
import { BsFillVolumeDownFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
      <img className='footer_albumLogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIhYIFxJS5TSBOJJscJPUefyIul7TDimZVQ&usqp=CAU' alt='' />
  <div className='footer_left'>
<div className='footer_songInfo'>
  <h4>Yeah!</h4>
<p>Usher</p>
</div>
  </div>

  <div className='footer_center'>
<BiShuffle className='footer_green' />
<BiSkipPrevious className='footer_icon' />
<IoPlayCircleOutline className='footer_icon playcircle' />
<BiSkipNext className='footer_icon' />
<BsArrowRepeat className='footer_green' />
</div>

<div className='footer_right'>
<Grid container spacing={2}>
<Grid item>
  <MdPlaylistPlay  />
</Grid >
<Grid item>
<BsFillVolumeDownFill />
</Grid>
<Grid item xs>
<Slider aria-labelledby='continuous-slider' className='sliderr'/>
</Grid>
</Grid>
</div>
    </div> 
  )
}
 
export default Footer
