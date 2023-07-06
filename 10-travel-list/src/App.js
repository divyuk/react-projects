import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((curritems) => [...curritems, item]);
  }
  function handleDeleteItem(id) {
    setItems((currItems) => currItems.filter((item) => item.id !== id));
  }
  function togglePackedItem(id) {
    setItems((currItems) =>
      currItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={togglePackedItem}
      />
      <Stats items={items} />
    </div>
  );
}
