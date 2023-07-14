import { useState } from "react";
import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const { id, name, image, balance } = friend;
  const isSelected = selectedFriend?.id === id;
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={image} alt={id} />
        <h3>{name}</h3>
        {balance < 0 && (
          <p className="red">
            You owe {name} ₹{Math.abs(balance)}
          </p>
        )}
        {balance > 0 && (
          <p className="green">
            {name} owes you ₹{balance}
          </p>
        )}
        {balance === 0 && <p>You and {name} are even</p>}
        <Button handleClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
}
