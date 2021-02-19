import HeaderImage from'./HeaderImage.png';
import React from "react"
import styles  from './Header.css'


//then in the render function of Jsx insert the mainLogo variable

class Header extends React.PureComponent {
  render() {
    return (
        <div className="HeaderContainer">
          <img  src={HeaderImage} alt="fireSpot" width="1450" height="180"/>
        </div>
    );
  }
}
export default Header;