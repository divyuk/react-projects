import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";
export default function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color) => {
        return <SingleColor color={color} />;
      })}
    </section>
  );
}
