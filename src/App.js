import './App.css';
import Card from './Card'
import React from 'react';

// shuffle cards
const shuffle = (arr) => {
  console.log(arr)
  let temp = arr
  let result = []
  const count = temp.length 
  for (let i = 0; i < count; i++){
    const index = Math.floor(Math.random() * (count-i))
    result.push(temp[index])
    temp.splice(index, 1)
  }
  return result
}

const createCards = () => {
  // Double the amount of cards
  const cardVal = ["borzoi.jpg", "capybara.png", "goose.jpg", "lemur.png", "macaw.png", "oriental-cat.jpg", "penguin.jpg", "shoebill.jpg"];
  let cardValues = cardVal.concat(cardVal)
  const shuffled = shuffle(cardValues)
  let cards = []
  for (let i = 0; i < shuffled.length; i++){
    cards.push(
      {
        id: i,
        text: shuffled[i],
        matched: false,
        flipped: false
      }
    )
  }
  return cards
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: createCards(), flippedCount: 0, prevFlipped: {}, correct: []}
  }

  componentDidMount(){
    // this.setState(state =>({cards: shuffle(this.cardValues)}))
  }

  newGame = () => {
    let cards = shuffle(this.state.cards)
    for (let i = 0; i < cards.length; i++){
      // flip all stuff
      cards[i].flipped = false
      cards[i].matched = false
    }
    this.setState(state =>({cards: cards}))
    console.log("newgame",cards)
  }

  getData = (data) => {
    let card = this.state.cards[data.card.id]
    if (card.matched) {return}
    if (card.flipped) {return}
    console.log("data",data)
    
    let flipped = this.state.flippedCount
    let previous = this.state.prevFlipped

    card.flipped = true
    if (Object.keys(previous).length === 0){
      previous = card
    }
    else{
      if (previous.text !== card.text){
        setTimeout(() => {
          let cards = this.state.cards
          previous.flipped = false
          card.flipped = false
          cards[card.id] = card
          cards[previous.id] = previous
          this.setState(state => ({
            flippedCount: flipped,
            prevFlipped: {},
            cards:cards
            
          }))
        },300)
      }
      else {
        previous = {}
        // this.setState(state => ({correct: [...state.correct,card.text]}))
        this.state.correct.push(card.text)
      }
    }
    let cards = this.state.cards
    cards[card.id] = card
    cards[previous.id] = previous
    this.setState(state => ({
      flippedCount: flipped,
      prevFlipped: previous,
      cards:cards
      
    }))

    if (this.state.correct.length === 8){
      setTimeout(() => {
        alert("You won!!!!!")
        this.setState(state => ({correct: []}))
        this.newGame()
        return
      },300)
    }
    console.log(this.state.correct)

  }

  
  render(){
    return (
      <div className="App">
        <div className='app-header'>
          <h3>Memory Game</h3>
          <button onClick={this.newGame}>New Game</button>
        </div>
        <div className="card-grid">
          {this.state.cards.map((card, idx)=>(
          
          
          <Card key={card.id} card={card} onChange={this.getData} matched={card.matched}/>
        
        
        ))}
        </div>
      </div>
    );
  }
}

export default App;