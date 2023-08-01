import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Items from "./Items";

function GroceryForm() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  function removeItem(currentId) {
    setItems((currItems) => currItems.filter((item) => item.id !== currentId));
  }
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
    <>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" type="submit">
            Add Items
          </button>
        </div>
      </form>
      <Items items={items} removeItem={removeItem} />
    </>
  );
}

export default GroceryForm;
