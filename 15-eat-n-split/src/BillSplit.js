import { useState } from "react";

export default function BillSplit({ handleSplit, account, selectedFriend }) {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [whoPay, setWhoPay] = useState(0);
  const xExpense = bill - yourExpense;
  function handlerSubmit(event) {
    event.preventDefault();
    if (whoPay === 0) account = xExpense;
    handleSplit(account);
  }
  function handlerSelect(event) {
    const who = event.target.value;
    setWhoPay(who);
  }
  return (
    <form className="form-split-bill" onSubmit={handlerSubmit}>
      <h2>Split A Bill With X</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(event) => setBill(event.target.value)}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(event) => setYourExpense(event.target.value)}
      />
      <label>👫 X expense </label>
      <input type="text" disabled value={xExpense} />
      <label>🤑 Who is paying the bill</label>
      <select onChange={handlerSelect}>
        <option value={0}>You</option>
        <option value={1}>X</option>
      </select>
      <button type="submit" className="button">
        Split Bill
      </button>
    </form>
  );
}
