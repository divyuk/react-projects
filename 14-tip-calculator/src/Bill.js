export default function Bill({ bill, handleBill }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        onChange={(event) => handleBill(Number(event.target.value))}
        type="text"
        value={bill}
      />
    </div>
  );
}
