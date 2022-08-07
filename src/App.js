import './App.css';
import React from 'react';
import Die from './components/Die';

 export default function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const arrDice = [];
    for (let i = 0; i < 10; i++) {
      arrDice.push(Math.floor(Math.random() * 6))
    }
    return arrDice;
  }

  const diceElements = dice.map(die => <Die value={die} />)

  function rollDice() {
    setDice(allNewDice)
  }

  return (
    <div className="main">
      <div className="dice-container">
        {diceElements}
        <button onClick={rollDice}>Roll Dice</button>
      </div>
    </div>
  );
} 

