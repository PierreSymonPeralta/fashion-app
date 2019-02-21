import React, { Component } from 'react';
import './style.scss';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <div className="filters__left">
          <button className="btn btn__filter">Filter</button>
        </div>
        <div className="filters__right">
          <button className="btn">New</button>
          <button className="btn">Existing</button>
        </div>
      </div>
    );
  }
}

export default Filters;
