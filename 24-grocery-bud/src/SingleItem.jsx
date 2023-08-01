import { useState } from "react";

function SingleItem({ name }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
      <p style={{ textDecoration: isChecked ? "line-through" : "" }}>{name}</p>
      <button>Delete</button>
    </div>
  );
}

export default SingleItem;
