import './App.css';
import Card from './Card'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: ["borzoi.jpg", "capybara.png", "goose.jpg", "lemur.png", "macaw.png", "oriental-cat.jpg", "penguin.jpg", "shoebill.jpg","borzoi.jpg", "capybara.png", "goose.jpg", "lemur.png", "macaw.png", "oriental-cat.jpg", "penguin.jpg", "shoebill.jpg"]}
    this.setState(state =>({cards: this.shuffle(this.state.cards)}))
  
  }

  // shuffle cards
  shuffle = (arr) => {
    let result = []
    const count = arr.length 
    console.log(count)
    for (let i = 0; i < count; i++){
      const index = Math.floor(Math.random() * (count-i))
      result.push(arr[index])
      arr.splice(index, 1)
    }
    return result
  }

    
    // Double the amount of cards
  cardVal = ["borzoi.jpg", "capybara.png", "goose.jpg", "lemur.png", "macaw.png", "oriental-cat.jpg", "penguin.jpg", "shoebill.jpg"];
  cardValues = this.cardVal.concat(this.cardVal)

  componentDidMount(){
    this.handleClick()
  }

  handleClick = () => {
    this.setState(state =>({cards: this.shuffle(this.state.cards)}))
  }

render(){
  return (
    <div className="App">
      <div className='app-header'>
        <h3>Memory Game</h3>
        <button onClick={this.handleClick}>New Game</button>
      </div>
      <div className="card-grid">{this.state.cards.map((item,idx)=>(
        
        
          <Card key={idx} cardText={item}/>
        
        
        ))}
      </div>
    </div>
  );
}
}

export default App;