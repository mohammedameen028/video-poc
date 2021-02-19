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

import Modal from "./Modal";
import Button from "react-bootstrap/Button";

//then in the render function of Jsx insert the mainLogo variable

class ShopingCart extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      show: false,
      closeButton: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  render() {
    const { show } = this.state;
    console.log("show me", show);

    setTimeout(function () {
      document.getElementById("item1").style.display = "block";
    }, 10000);

    setTimeout(function () {
      document.getElementById("item2").style.display = "block";
    }, 20000);

    setTimeout(function () {
      document.getElementById("item3").style.display = "block";
    }, 30000);

    setTimeout(function () {
      document.getElementById("item4").style.display = "block";
    }, 40000);

    setTimeout(function () {
      document.getElementById("item5").style.display = "block";
    }, 50000);

    setTimeout(function () {
      document.getElementById("item6").style.display = "block";
    }, 60000);

    setTimeout(function () {
      document.getElementById("item7").style.display = "block";
    }, 70000);

    return (
      <div className={styles["shopping-cart"]}>
        {!this.state.closeButton ? (
          <>
            <div className={styles["cart-header"]}>
              <span>
                We have created your shopping whishlist from above video
              </span>{" "}
              <span style={{ marginLeft: "20px" }} onClick={this.handleClose}>
                &#10006;
              </span>
            </div>
            <div className={styles["cart-item"]}>
              <div id="item1" className={styles["item1"]}>
                <img
                  src={coolingwire}
                  alt="fireSpot"
                  width="145"
                  height="130"
                />
              </div>
              <div id="item2" className={styles["item2"]}>
                <img
                  src={cupcakeliners}
                  alt="fireSpot"
                  width="145"
                  height="130"
                />
              </div>
              <div id="item3" className={styles["item3"]}>
                <img
                  src={MeasuringCup}
                  alt="fireSpot"
                  width="145"
                  height="130"
                />
              </div>
              <div id="item4" className={styles["item4"]}>
                <img src={LargeBowls} alt="fireSpot" width="145" height="130" />
              </div>
              <div id="item5" className={styles["item5"]}>
                <img src={Potatao} alt="fireSpot" width="145" height="130" />
              </div>
              <div id="item6" className={styles["item6"]}>
                <img
                  src={BakingScooper}
                  alt="fireSpot"
                  width="145"
                  height="130"
                />
              </div>
              <div id="item7" className={styles["item7"]}>
                <img src={MuffinPan} alt="fireSpot" width="145" height="130" />
              </div>
            </div>
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>Modal</p>
            </Modal>
            <div className={styles["cart-footer"]}>
              <Button className={styles["button1"]} onClick={this.showModal}>
                Save To Cart
              </Button>
              <Button className={styles["button2"]} onClick={this.showModal}>
                Buy Now
              </Button>
            </div>
          </>
        ) : (
          <div className={styles["cart-header"]}>
            <span>Click here to create the dynamic shopping cart</span>{" "}
            <span style={{ marginLeft: "30px" }} onClick={this.handleClose}>
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart--v1.png"/>
            </span>
          </div>
        )}
      </div>
    );
  }
}
export default ShopingCart;
