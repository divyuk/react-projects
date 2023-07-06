import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  const renderedList = items.map((item) => {
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
    </div>
  );
}
