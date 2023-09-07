import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [push, setPush] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setCount(count + push);
    setPush(0);
  }
  return (
    <main>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <label>{count}</label>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={push}
          onChange={(e) => setPush(Number(e.target.value))}
        />
        <button type="submit">Add</button>
      </form>
    </main>
  );
}

export default Counter;
