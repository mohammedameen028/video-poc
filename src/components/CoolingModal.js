import './sharemodal.css';
import React, { useState} from 'react'
import coolingwire from'./cartimage/large-bowl.png';
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
			<section className="modal-main-share">
				<div className="modal-header-share">Buy Now</div>
				
				{!state.proceed ? (<div className='cart-share'>
					<img src={coolingwire} alt="fireSpot" width="350" height="450" />
				</div>) :
				(<div className='cart-share'>
				<img src={coolingwire} alt="fireSpot" width="300" height="450" />
			</div>)
				}
				{/* {children} */}
				<div style={{marginLeft:"14px", padding:"8px"}}>
				
					<span style={{marginLeft:"20px"}}>
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