import React from 'react';
import './style.scss';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      showNavbar: false
    };
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  
  render() {
    return (
    <div className="header">
      <div className="header__name">
        <h3>Jane Smith</h3>
      </div>
      <div className="header__details">
        <div className="header__details__top">
          <h3>New 11</h3>
          <h3>Existing 50</h3>
        </div>
        <div className="header__details__bottom">
          <span>Current subscription is ending on 3 Mar 2019</span>
          &nbsp;&nbsp;<a href="#renew">Renew Now</a>
        </div>
      </div>
    </div>
    )
  }

  // ******** CUSTOM METHODS *********** //

  onMenuClick(){
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle('navbar--visible');
  }
}
  
export default Header;