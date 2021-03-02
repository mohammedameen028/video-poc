import './sharemodal.css';
import React, { useState} from 'react'
import Store from'./cartimage/cart-store-screen.png';
import Cart from './cartimage/ss.jpg';
import Share from './cartimage/sharewindow.png';
import {TextField, Button} from "@material-ui/core";
import savecart from './cartimage/savedcart.png';


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
				<div className="modal-header-share">We Have Saved For You!</div>
				
				{!state.proceed ? (<div className='cart-share'>
					<img src={savecart} alt="fireSpot" width="350" height="480" />
				</div>) :
				(<div className='cart-share'>
				<img src={savecart} alt="fireSpot" width="300" height="400" />
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