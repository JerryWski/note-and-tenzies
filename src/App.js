import "./styles.css";
import { useState, useEffect } from "react";
import Dice from "./components/Dice";

const App = () => {
  const allNewDice = () => {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(Math.floor(Math.random() * 6));
    }
    return newArray;
  };

  const [arrayNumbers, setArrayNumbers] = useState(allNewDice());

  const newArrayNumbers = arrayNumbers.map((arrayNumber, id) => (
    <Dice value={arrayNumber} key={id}/>
  ));
  console.log(newArrayNumbers);

  return (
    <main>
      <div className="dice-container">{newArrayNumbers}</div>
    </main>
  );
};

export default App;
