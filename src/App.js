import './App.css';
import Card from './Card'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: [], flippedCount: 0, prevFlipped: "", correct: [], test: []}
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
    this.setState(state =>({cards: this.shuffle(this.cardValues),test:this.state.cards.map((item,idx)=>(
        
        
    <Card key={idx} cardText={item} onChange={this.getData} />
  
  
  ))}))
  }

  handleClick = () => {
    for (let i = 0; i < this.state.test.length; i++){
      console.log(this.state.test[i])
    }
    this.setState(state =>({cards: this.shuffle(this.state.cards)}))
  }

  getData = (data) => {
    if (this.state.correct.includes(data.card)) {return}

    if (data.isFlipped){
      this.state.flippedCount += 1
      if (this.state.flippedCount === 1){
        this.state.prevFlipped = data.card
      }
    }
    else{
      this.state.flippedCount -= 1
      if (this.state.flippedCount === 0){
        this.state.prevFlipped = ""
      }
    }

    if (this.state.flippedCount === 2){
      // console.log(this.state.prevFlipped,data.card)
      if (this.state.prevFlipped == data.card){
        this.state.flippedCount = 0
        this.state.correct.push(data.card)
        console.log(this.state.correct)
      }
      // setTimeout(() => {console.log("bruh")},1000)
    }
    
    if (this.state.correct.length === 8){
      alert("You won!!!!!")
      this.handleClick()
    }
    

  }

  
  render(){
  this.state.test = this.state.cards.map((item,idx)=>(
        
        
    <Card key={idx} cardText={item} onChange={this.getData} correct={this.state.correct}/>
  
  
  ))
  console.log(this.state.cards)

  return (
    <div className="App">
      <div className='app-header'>
        <h3>Memory Game</h3>
        <button onClick={this.handleClick}>New Game</button>
      </div>
      <div className="card-grid">
        {this.state.test}
      </div>
    </div>
  );
}
}

export default App;