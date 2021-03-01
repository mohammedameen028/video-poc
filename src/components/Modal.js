import './modal.css';
import React, { useState} from 'react'
import Store from'./cartimage/cart-store-screen.png';
import savedcart from "./cartimage/savedcart.png";

import Cart from './cartimage/ss.jpg';
import {TextField, Button} from "@material-ui/core";


const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
const [state, setState] =useState({proceed: false})
const handleProceed = (e) => {
	console.log("kzbdfkhk",state.proceed)
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
				<div className="modal-header">Checkout</div>

				{!state.proceed ? (<div className="email" style={{width:"400px", marginLeft:"30%", height:"10px", padding:"15px"}}>
					<TextField id="outlined-basic" label="Email" variant="outlined" fullWidth="true" placeholder="abc@mail.com"/>
				</div> ) :''}
				
				{!state.proceed ? (<div className='cart'>
					<img src={Store} alt="fireSpot" width="700" height="400" />
				</div>) :
				(<div className='cart'>
				<img src={Cart} alt="fireSpot" width="700" height="500" />
			</div>)
				}
				{/* {children} */}
				<div style={{marginLeft:"14px", padding:"8px"}}>
					<span>
					<Button variant="contained" color="primary" onClick={(e) => {handleProceed(e)}}className="proceed">
						proceed
					</Button>
					</span>
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

export default Modal;