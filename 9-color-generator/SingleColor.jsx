export default function SingleColor({ color }) {
  const { hex, weight } = color;
  return (
    <article className="color" style={{ backgroundColor: `#${hex}` }}>
      <p className="percent-value">{weight}</p>
      <p className="color-value">{hex}</p>
    </article>
  );
}
