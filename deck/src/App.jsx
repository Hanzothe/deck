import { useState } from "react";
import "./index.css";

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(0);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="App">
      <div id="container">
        <button id="gera" onClick={handleRandomNum}>
          Gerar
        </button>
        <p>Numero Aleatório {randomNum}</p>
      </div>
    </div>
  );
}

export default App;
