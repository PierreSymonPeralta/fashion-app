import React, { Component } from 'react';
import { Filters, Card } from '../';
import data from './static'
import './style.scss';


class Content extends Component {
  constructor(){
    super();
    this.state = {
      cards: data
    }
  }
  render() {
    return (
      <div className="content">
        <div className="content__gallery">
          {this.state.cards.length > 0 && 
          this.state.cards.map(c => {
            return <Card data={c}/>
          })}
        </div>
      </div>
    );
  }
}

export default Content;
