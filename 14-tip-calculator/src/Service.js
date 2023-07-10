export default function Service({ children, handleTip, tip }) {
  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => handleTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%) </option>
        <option value={5}>Satisfied (5%) </option>
        <option value={10}>Good (10%) </option>
        <option value={20}>Excellent (20%) </option>
      </select>
    </div>
  );
}
