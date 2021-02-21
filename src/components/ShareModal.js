import './sharemodal.css';
import React, { useState} from 'react'
import Store from'./cartimage/cart-store-screen.png';
import Cart from './cartimage/ss.jpg';
import Share from './cartimage/sharewindow.png';
import {TextField, Button} from "@material-ui/core";


const ShareModal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
const [state, setState] =useState({proceed: false})
const handleProceed = (e) => {
	setState((prevState) => {
	  return{
		...prevState,
		proceed:true
	  }
	})
}
	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<div className="modal-header">Share</div>
				
				{!state.proceed ? (<div className='cart'>
					<img src={Share} alt="fireSpot" width="300" height="450" />
				</div>) :
				(<div className='cart'>
				<img src={Share} alt="fireSpot" width="300" height="400" />
			</div>)
				}
				{/* {children} */}
				<div style={{marginLeft:"14px", padding:"8px"}}>
				
					<span style={{marginLeft:"40px"}}>
					<Button variant="contained" color="secondary" onClick={handleClose} className="close">
						Close
					</Button>
					</span>
				</div>
			</section>
		</div>

	
  );
};

export default ShareModal;