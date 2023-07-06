export default function Item({ item, onDeleteItem, onToggleItem }) {
  const { id, description, quantity, packed } = item;
  return (
    <li>
      <input type="checkbox" value={packed} onClick={() => onToggleItem(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
