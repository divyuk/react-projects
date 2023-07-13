import { useState } from "react";

export default function Friend({ friend }) {
  const [account, setAccount] = useState(0);
  const [current, setCurrent] = useState(false);
  let { id, name, image, balance } = friend;
  balance = account;
  function handleSelect() {
    setCurrent((curr) => !curr);
  }
  return (
    <>
      <li>
        <img src={image} alt={id} />
        <h3>{name}</h3>
        {balance < 0 ? (
          <p>You owe {Math.abs(balance)} to X </p>
        ) : (
          <p>
            {name} ows you {balance}
          </p>
        )}
        <button onClick={handleSelect} className="button">
          {current ? "Close" : "Select"}
        </button>
      </li>
    </>
  );
}
