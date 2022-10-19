import { useState } from "react";
import "./index.scss";
import Deck from "./Deck";
import { RegularDeck } from "./CardsData";

function App() {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(0);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  const DOptions = [4, 6, 8, 12, 20];
  console.log(RegularDeck[4].Quote);
  return (
    <div className="App">
      <Deck />
      <div id="btndices">
        <div id="buttons">
          {DOptions.map((option) => (
            <button
              className="dices"
              onMouseEnter={() => {
                setMaxVal(option);
              }}
              onClick={() => {
                handleRandomNum();
              }}
            >
              D{option}
            </button>
          ))}
        </div>
        <div id="number">{randomNum}</div>
      </div>
    </div>
  );
}

export default App;
