import React, { Component } from 'react';
import { SelectInput } from '../';

import './style.scss';

class SideBar extends Component {
  constructor(){
    super();
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    console.log('lol');
  }

  render() {
    return (
      <div className="sidebar">
        <SelectInput label="Location: "/>
        <SelectInput label="Size: "/>
      </div>
    );
  }
}

export default SideBar;
