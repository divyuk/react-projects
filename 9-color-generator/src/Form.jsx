import { useState } from "react";

export default function Form({ addColor }) {
  const [color, setColor] = useState("");

  const handleInput = (inputValue) => {
    setColor(inputValue.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handlerSubmit}>
        <input
          onChange={handleInput}
          type="color"
          name="color"
          id="color"
          value={color}
        />
        <input
          onChange={handleInput}
          type="text"
          name="color"
          id="color"
          value={color}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
