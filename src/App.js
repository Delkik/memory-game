import './App.css';
import Card from './Card'

function App() {

  // Double the amount of cards
  const cardVal = ["Card1", "Card2", "Card3", "Card4", "Card5", "Card6", "Card7", "Card8"];
  const cardValues = cardVal.concat(cardVal)

  // shuffle cards
  const shuffle = (arr) => {
    let result = []
    const count = arr.length 
    for (let i = 0; i < count; i++){
      const index = Math.floor(Math.random() * (count-i))
      result.push(arr[index])
      arr.splice(index, 1)
    }
    return result
  }

  let shuffled = shuffle(cardValues)

  return (
    <div className="App">
      <div className="card-grid">{shuffled.map((item,idx)=>(
        
        
          <Card key={idx} cardText={item}/>
        
        
        ))}
      </div>
    </div>
  );
}

export default App;