import React, { Component } from 'react';
import { Filters } from '../';
import './style.scss';


class Content extends Component {
  render() {
    return (
      <div className="content">
        <Filters/>
      </div>
    );
  }
}

export default Content;
