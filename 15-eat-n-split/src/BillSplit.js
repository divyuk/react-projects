import { useState } from "react";

export default function BillSplit({ selectedFriend, onSplit }) {
  const name = selectedFriend.name;
  const [bill, setBill] = useState(0);
  const [userExpense, setUserExpense] = useState(0);
  const friendExpense = bill ? bill - userExpense : "";
  const [whoPay, setWhoPay] = useState("user");

  function handleSubmit(event) {
    event.preventDefault();
    if (!bill || !userExpense) return;
    onSplit(whoPay === "user" ? friendExpense : -userExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split A Bill With {name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />
      <label>👫 {name} expense </label>
      <input type="text" disabled value={friendExpense} />
      <label>🤑 Who is paying the bill</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
}
