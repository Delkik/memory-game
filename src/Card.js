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
    // console.log(prevState,this.state)
    if (this.props.onChange && prevState.isFlipped!==this.state.isFlipped) {
      this.props.onChange({isFlipped: this.state.isFlipped, card: this.props.card});
    }
  }

  render() {
    // console.log(this.props.flipped)
    if(this.props.card.flipped === false && !this.props.card.matched) {
      return (
        <div className='back' onClick={this.handleClick}> </div>
      );
		}
    return (
      <div className='front' onClick={this.handleClick}>
        <img src={require(`./images/${this.props.card.text}`)} alt={`images/${this.props.card.text}`}></img>
      </div>
    );
  }
}

export default Card;