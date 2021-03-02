import React from "react";
import classNames from "classnames";
import styles from "./ShopingCart.module.scss";
import coolingwire from "./cartimage/coolingwire.png";
import MeasuringCup from "./cartimage/measuringcup.png";
import cupcakeliners from "./cartimage/cupcakeliners.png";
import LargeBowls from "./cartimage/large-bowls-new.png";
import BakingScooper from "./cartimage/measuring-cups-new.png";
import Potatao from "./cartimage/potato-masher-new.png";
import MuffinPan from "./cartimage/muffin-pan-new.png";
import sharewindow from "./cartimage/sharewindow.png"
import {FaShareSquare} from 'react-icons/fa'
import {AiOutlineLike} from 'react-icons/ai'




import Modal from "./Modal";
import ShareModal from './ShareModal';
import CoolingModal from './CoolingModal';
import BowlModal from './BowlModal'
import Button from "react-bootstrap/Button";

//then in the render function of Jsx insert the mainLogo variable

class ShopingCart extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      show: false,
      showSharewindow: false,
      closeButton: false,
      timer: 10000,
      showCooling: false,
      showBowl: false
    };
    this.showModal = this.showModal.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
    this.showCoolingModal = this.showCoolingModal.bind(this);
    this.showBowlModal = this.showBowlModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

showCoolingModal =() =>{
  this.setState({showCoolingModal:true})
}

hideCoolingModal =() =>{
  this.setState({showCoolingModal:false})
}

showBowlModal =() =>{
  this.setState({showBowl:true})
}

hideBowlModal =() =>{
  this.setState({showBowl:false})
}

  showShareModal =() =>{
    this.setState({showSharewindow:true})
  }


  hideShareModal =() =>{
    this.setState({ showSharewindow: false });

  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleClose = () => {
    this.setState({ closeButton: !this.state.closeButton });
  
  };

  displayProductHandler = (item, timer) => {
   return setTimeout(() => {
     !this.state.closeButton && (document.getElementById(item).style.display = "block");
    }, timer)
  }

  

  render() {
    const { show } = this.state;
    console.log("show me", show);
    const products = {'item1': 10000, 'item2': 20000, 'item3':40000, 'item4':50000, 'item5':60000, 'item6':70000, 'item7':80000}

    !this.state.closeButton && Object.entries(products).map(([item, timer], k) => {
      this.displayProductHandler(item, timer)

    })
      
    return (
      <>
        {!this.state.closeButton ? (
          <div className={styles["shopping-cart"]}>
            <div className={styles["cart-header"]}>
              <span>
                We have created your shopping whishlist from above video
              </span>{" "}
              <span style={{ marginLeft: "20px" }} onClick={this.handleClose}>
                &#10006;
              </span>
              <span >
                <div>
                <ShareModal show={this.state.showSharewindow} handleClose={this.hideShareModal}>
              <p>Modal</p>
            </ShareModal>
                </div>
              <span className={styles["icon1"]} onClick={this.showShareModal}><FaShareSquare size={20}/></span>
              </span>
            </div>
            <div className={styles["cart-item"]}>
              <div id="item1" className={styles["item1"]}>
               

                <div>
                <img
                  src={cupcakeliners}
                  alt="fireSpot"
                  width="145"
                  height="130"
                />
                </div>
               <div>
                <span className={styles["icon1"]}><FaShareSquare size={20}/></span>
                <span className={styles["icon2"]}><AiOutlineLike size={20}/></span>

                </div>
              </div>
              <div id="item2" className={styles["item2"]}>
              <div>
              <CoolingModal show={this.state.showCoolingModal} handleClose={this.hideCoolingModal}>
              <p>Modal</p>
            </CoolingModal>
                <img
                  onClick={this.showCoolingModal}
                  src={coolingwire}
                  alt="fireSpot"
                  width="145"
                  height="130"
                />
                </div>
                <div>
                <span className={styles["icon1"]}><FaShareSquare size={20}/></span>
                <span className={styles["icon2"]}><AiOutlineLike size={20}/></span>

                </div>
              </div>
              <div id="item3" className={styles["item3"]}>
                <div>
                <img
                  src={MeasuringCup}
                  alt="fireSpot"
                  width="145"
                  height="130"
                />
                </div>
                <div>
                <span className={styles["icon1"]}><FaShareSquare size={20}/></span>
                <span className={styles["icon2"]}><AiOutlineLike size={20}/></span>

                </div>
                
              </div>
              <div id="item4" className={styles["item4"]}>
                <div>
                <BowlModal show={this.state.showBowl} handleClose={this.hideBowlModal}>
              <p>Modal</p>
            </BowlModal>
                <img src={LargeBowls} alt="fireSpot" width="145" height="130"  onClick={this.showBowlModal}/>
                </div>
                <div>
                <span className={styles["icon1"]}><FaShareSquare size={20}/></span>
                <span className={styles["icon2"]}><AiOutlineLike size={20}/></span>
                </div>
              </div>
              <div id="item5" className={styles["item5"]}>
                <div>
                <img src={Potatao} alt="fireSpot" width="145" height="130" />
                </div>
                <div>
                <span className={styles["icon1"]}><FaShareSquare size={20}/></span>
                <span className={styles["icon2"]}><AiOutlineLike size={20}/></span>
                </div>
              </div>
              <div id="item6" className={styles["item6"]}>
                <div>
             
                <img
                  src={BakingScooper}
                  alt="fireSpot"
                  width="145"
                  height="130"
                />
                   </div>
                   <div>
                   <span className={styles["icon1"]}><FaShareSquare size={20}/></span>
                <span className={styles["icon2"]}><AiOutlineLike size={20}/></span>

                   </div>
              </div>
              <div id="item7" className={styles["item7"]}>
                <div>

            
                <img src={MuffinPan} alt="fireSpot" width="145" height="130" />
                </div>
                <div>
                <span className={styles["icon1"]}><FaShareSquare size={20}/></span>
                <span className={styles["icon2"]}><AiOutlineLike size={20}/></span>
                </div>
              </div>
            </div>
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>Modal</p>
            </Modal>
            <div className={styles["cart-footer"]}>
              <Button className={styles["button1"]} onClick={this.showModal}>
              Whishlist
              </Button>
              <Button className={styles["button2"]} onClick={this.showModal}>
                Buy Now
              </Button>
            </div>
          </div>
        ) : null

          // <div className={styles["cart-header"]}>
          //   <span>Click here to create the dynamic shopping cart</span>{" "}
          //   <span style={{ marginLeft: "30px" }} onClick={this.handleClose}>
          //   <img src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart--v1.png"/>
          //   </span>
          // </div>
       }
      </>
    );
  }
}
export default ShopingCart;
