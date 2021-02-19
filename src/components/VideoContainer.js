import React from "react"

import ReactPlayer from "react-player"
import classNames from 'classnames';
import styles from './VideoContainer.module.scss';
import AddImage from'./AddImage.png';
import ShopingCart from './ShopingCart'


function VideoContainer() {
	return (
	  
	  <div className={styles['video-main']}>
<div className={styles['video-container']}>
		<ReactPlayer
		width="100%"
	    // height="0%"
		  url="https://www.youtube.com/watch?v=vkWGldvvx2o&feature=youtu.be"
		/>
		<div><ShopingCart/></div>
		</div>
		<div>
		<img  src={AddImage} alt="fireSpot" width="340" height="600"/>
</div>
	  </div>
	)
  }
  
  export default VideoContainer