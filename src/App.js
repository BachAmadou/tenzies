import './App.css';
import React from 'react';
import { nanoid } from 'nanoid'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Die from './components/Die';


 export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!!!")
    }
  }, [dice])

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}


  function allNewDice() {
    const arrDice = [];
    for (let i = 0; i < 10; i++) {
      arrDice.push(generateNewDie())
    }
    return arrDice;
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  function rollDice() {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
    }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  return (
    <div className="main">
      <div className="dice-container">
        {diceElements}
        <button 
          className="roll-dice" 
          onClick={rollDice}>
            {tenzies ? "new game" : "Roll"}
            </button>
      </div>
    </div>
  );
} 

