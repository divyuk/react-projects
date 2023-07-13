import { useState } from "react";

export default function Friend({
  friend,
  selected,
  handleSelect,
  handleSelectedFriend,
}) {
  const [account, setAccount] = useState(0);

  const { id, name, image, balance } = friend;

  function handleClick() {
    handleSelect(!selected);
    handleSelectedFriend(id);
  }
  return (
    <>
      <li className={selected ? "selected" : ""}>
        <img src={image} alt={id} />
        <h3>{name}</h3>
        {balance < 0 ? (
          <p>You owe {Math.abs(balance)} to X </p>
        ) : (
          <p>
            {name} ows you {balance}
          </p>
        )}
        <button onClick={handleClick} className="button">
          {selected ? "Close" : "Select"}
        </button>
      </li>
    </>
  );
}
