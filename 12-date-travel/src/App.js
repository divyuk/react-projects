import "./style.css";
import { useState } from "react";
function App() {
  // We need 2 Control element to control the slider, input
  const [slider, setSlider] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setSlider(1);
  }
  return (
    <>
      <div className="App">
        <input
          onChange={(e) => setSlider(Number(e.target.value))}
          type="range"
          min="0"
          max="8"
          value={slider}
        />
        <label>{slider}</label>
      </div>
      <div className="App">
        <button onClick={() => setCount((c) => c - slider)}>-</button>
        <input
          onChange={(e) => setCount(Number(e.target.value))}
          type="text"
          value={count}
        />
        <button onClick={() => setCount((c) => c + slider)}>+</button>
        <p>
          {count === 0
            ? `Today is`
            : count > 0
            ? `${count} days from today is`
            : `${count} days ago from today was`}
        </p>
        <p>{date.toDateString()}</p>

        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
