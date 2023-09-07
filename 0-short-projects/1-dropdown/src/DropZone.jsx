import { useState } from "react";

const fruits = [
  { label: "Apple", value: "🍎", type: ["Kashmiri", "Himalayan"] },
  { label: "Banana", value: "🍌", type: ["Blue Java", "Mexican"] },
  {
    label: "Orange",
    value: "🍊",
    type: ["Butwal", "Khasi Santra", "Shrinagar"],
  },
];
function DropZone() {
  const [fruitName, setFruitName] = useState("Apple");

  return (
    <main>
      <select value={fruitName} onChange={(e) => setFruitName(e.target.value)}>
        {fruits.map((fruit, index) => (
          <option key={index}>{fruit.label}</option>
        ))}
      </select>
      <select>
        {fruits
          .find((fruit) => fruit.label === fruitName)
          .type.map((fruitType) => (
            <option>{fruitType}</option>
          ))}
      </select>
    </main>
  );
}

export default DropZone;
