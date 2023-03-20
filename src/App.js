import "./styles.css";
import { useState, useEffect } from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

const App = () => {
  const generateNewDice = () => {
    return {
      value: Math.floor(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  };

  const allNewDice = () => {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(generateNewDice());
    }
    return newArray;
  };

  const [arrayNumbers, setArrayNumbers] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = arrayNumbers.every((arrayNumber) => arrayNumber.isHeld);
    const firstValue = arrayNumbers[0].value;
    const allSameValue = arrayNumbers.every(
      (arrayNumber) => arrayNumber.value === firstValue
    );
    if(allHeld && allSameValue) {
      setTenzies(true)
      console.log('you won');
    }
  }, [arrayNumbers]);

  const rollDice = () => {
    setArrayNumbers((oldArrayNumbers) =>
      oldArrayNumbers.map((arrayNumber) => {
        return arrayNumber.isHeld ? arrayNumber : generateNewDice();
      })
    );
  };

  const holdDice = (id) => {
    setArrayNumbers((prevArrayNumbers) =>
      prevArrayNumbers.map((arrayNumber) => {
        return arrayNumber.id === id
          ? { ...arrayNumber, isHeld: !arrayNumber.isHeld }
          : arrayNumber;
      })
    );
  };

  const newArrayNumbers = arrayNumbers.map((arrayNumber) => (
    <Dice
      value={arrayNumber.value}
      key={arrayNumber.id}
      isHeld={arrayNumber.isHeld}
      holdDice={() => holdDice(arrayNumber.id)}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{newArrayNumbers}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies === true ? " New Game ": "Roll" }
      </button>
    </main>
  );
};

export default App;
