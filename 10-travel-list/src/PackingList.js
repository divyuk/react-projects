import Item from "./Item";
import { useState } from "react";
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearAll,
}) {
  const [sortBy, setSortBy] = useState("input");

  // We can use here derived state we wont mutate the original array.
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  //! The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. Hence making a copy and then sorting.
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  const renderedList = sortedItems.map((item) => {
    return (
      <Item
        item={item}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
        key={item.id}
      />
    );
  });

  return (
    <div className="list">
      <ul>{renderedList}</ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by Input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>
      </div>

      <button onClick={onClearAll}>Clear All</button>
    </div>
  );
}
