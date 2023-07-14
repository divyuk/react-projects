export default function Button({ children, handleClick }) {
  return (
    <button onClick={handleClick} className="button">
      {children}
    </button>
  );
}
