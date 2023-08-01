import SingleItem from "./SingleItem";

function Items({ items, removeItem }) {
  return (
    <div className="items">
      {items.map((item, index) => (
        <SingleItem item={item} removeItem={removeItem} />
      ))}
    </div>
  );
}

export default Items;
