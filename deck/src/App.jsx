import { useState } from "react";
import "./index.css";
import Deck from "./Deck";

function App() {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(0);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="App">
      <Deck />
      <div id="btndices">
        <div id="buttons">
          <button
            className="dices"
            onMouseEnter={() => {
              setMaxVal(4);
            }}
            onClick={() => {
              handleRandomNum();
            }}
          >
            D4
          </button>
          <button
            className="dices"
            onMouseEnter={() => {
              setMaxVal(6);
            }}
            onClick={() => {
              handleRandomNum();
            }}
          >
            D6
          </button>
          <button
            className="dices"
            onMouseEnter={() => {
              setMaxVal(8);
            }}
            onClick={() => {
              handleRandomNum();
            }}
          >
            D8
          </button>
          <button
            className="dices"
            onMouseEnter={() => {
              setMaxVal(12);
            }}
            onClick={() => {
              handleRandomNum();
            }}
          >
            D12
          </button>
          <button
            className="dices"
            onMouseEnter={() => {
              setMaxVal(20);
            }}
            onClick={() => {
              handleRandomNum();
            }}
          >
            D20
          </button>
        </div>
        <div id="number">{randomNum}</div>
      </div>
    </div>
  );
}

export default App;
