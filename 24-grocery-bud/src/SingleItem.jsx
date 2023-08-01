import { useState } from "react";

function SingleItem({ item, removeItem }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="single-item">
      <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
      <p style={{ textDecoration: isChecked ? "line-through" : "" }}>
        {item.name}
      </p>
      <button className="remove-btn" onClick={() => removeItem(item.id)}>
        Delete
      </button>
    </div>
  );
}

export default SingleItem;
