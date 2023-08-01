import SingleItem from "./SingleItem";

function Items({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <SingleItem name={item.name} />
      ))}
    </div>
  );
}

export default Items;
