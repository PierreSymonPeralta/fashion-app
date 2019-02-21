import React, { Component } from 'react';

import './style.scss';

class SelectInput extends Component {
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
      <div className="styled-input__select">
        <label>{this.props.label || ''}</label>
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
      </div>
    );
  }
}

export default SelectInput;
