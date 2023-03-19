import "./styles.css";
import { useState, useEffect } from "react";
import Dice from "./components/Dice";
import { nanoid } from 'nanoid';

const App = () => {
  const allNewDice = () => {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push({ 
        value: Math.floor(Math.random() * 6), 
        isHeld: false,
        id: nanoid() 
      });
    }
    return newArray;
  };

  const [arrayNumbers, setArrayNumbers] = useState(allNewDice());

  const rollDice = () => {
    setArrayNumbers(allNewDice());
  };
  const holdDice = (id) => {
    console.log(id);
  }
  const newArrayNumbers = arrayNumbers.map((arrayNumber) => (
    <Dice value={arrayNumber.value} key={arrayNumber.id} isHeld={arrayNumber.isHeld} holdDice={() => holdDice(arrayNumber.id)} />
  ));


  return (
    <main>
      <div className="dice-container">{newArrayNumbers}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
};

export default App;
