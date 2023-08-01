import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Items from "./Items";

function GroceryForm() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      const newItem = {
        name,
        id: uuidv4(),
        completed: false,
      };
      setItems((curr) => [...curr, newItem]);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Items</button>
      </form>
      <Items items={items} />
    </div>
  );
}

export default GroceryForm;
