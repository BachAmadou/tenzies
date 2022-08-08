import './App.css';
import React from 'react';
import Die from './components/Die';

 export default function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const arrDice = [];
    for (let i = 0; i < 10; i++) {
      arrDice.push({
        value: Math.floor(Math.random() * 6),
        isHeld: false
      })
    }
    return arrDice;
  }

  const diceElements = dice.map(die => <Die value={die.value} isHeld={die.isHeld} />)

  function rollDice() {
    setDice(allNewDice)
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

