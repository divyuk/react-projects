import { useState } from "react";

export default function Form() {
  const [description, setDesciption] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();
    // If there is no description dont go down
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    // Get the Form back to its original form.
    setDesciption("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDesciption(e.target.value)}
        type="text"
        placeholder="Item..."
        value={description}
      ></input>
      <button>Add</button>
    </form>
  );
}
