import Item from "./Item";

export default function PackingList() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 2, description: "Books", quantity: 4, packed: true },
  ];
  const renderedList = initialItems.map((item) => {
    return <Item item={item} key={item.id} />;
  });

  return (
    <div className="list">
      <ul>{renderedList}</ul>
    </div>
  );
}
