import './modal.css';
import Cart from'./cartimage/cart.png';


const CartModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
		  <div className="modal-header">Checkout</div>
      
		  <div className='cart'>
		      <img  src={Store} alt="fireSpot" width="700" height="500"/>
          </div>  
        {/* {children} */}
		<div className="buttons">
		<button type="button" onClick={handleClose} className="proceed">
		proceed
        </button>
        <button type="button" onClick={handleClose} className="close">
          Close
        </button>
		</div>
      </section>
    </div>
  );
};

export default CartModal;