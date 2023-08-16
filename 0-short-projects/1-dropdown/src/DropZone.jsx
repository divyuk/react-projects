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
  const [fruitName, setFruitName] = useState("");
  return (
    <main>
      {/* Left Container */}
      <div>
        <select
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
        >
          {fruits.map((fruit) => (
            <option key={fruit.value}>{fruit.label}</option>
          ))}
        </select>
      </div>
      {/* Right Container */}
      <div>
        <select>
          {fruits.find((fruit) => fruit.label === fruitName).type}
        </select>
      </div>
    </main>
  );
}

export default DropZone;
