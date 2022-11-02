import React from 'react';
import "./Card.css"


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFlipped: false}
  }

  handleClick = () => {
    this.setState(state => ({isFlipped: !state.isFlipped}));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps, this.props)
    // console.log(prevState, this.state)
    // console.log(snapshot, this.snapshot)
  }
  
  render() {
    if(this.state.isFlipped === false) {
      return (
        <div className='back' onClick={this.handleClick}> </div>
      );
		}
    return (
      <div className='front' onClick={this.handleClick}>{this.props.cardText} </div>
    );
  }
}

export default Card;