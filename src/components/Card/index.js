import React from 'react';
import './style.scss';

/**
 * @props data {Object} Photo details
 * @props size {text}   Size of photo to be fetched
 */
class Card extends React.PureComponent {
  constructor(props){
    super();
    this.state = {
      showOverlay: false,
      card: props.data
    }
    this.imgEl = React.createRef();
  }

  // ******** LIFECYCLE METHODS *********** //
  componentDidMount(){
    
  }
  render(){
    return(
    <div className="card" onMouseEnter={this.toogleOverlay} onMouseLeave={this.toogleOverlay} >
      <img src={this.state.card.img} alt="" ref={(el) => this.imgEl = el }/>
    </div>
    )
  }

}
  
export default Card;