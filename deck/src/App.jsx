import { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

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
          <FontAwesomeIcon icon={faDotCircle} size="xs"></FontAwesomeIcon>
        </button>
        <p id="number">Numero Aleatório {randomNum}</p>
      </div>
    </div>
  );
}

export default App;
