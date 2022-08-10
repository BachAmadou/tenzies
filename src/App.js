import './App.css';
import React from 'react';
import { nanoid } from 'nanoid'
import Die from './components/Die';


 export default function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const arrDice = [];
    for (let i = 0; i < 10; i++) {
      arrDice.push({
        value: Math.floor(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return arrDice;
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  function rollDice() {
    setDice(allNewDice)
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
        <button className="roll-dice" onClick={rollDice}>Roll</button>
      </div>
    </div>
  );
} 

