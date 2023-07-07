import "./styles.css";
import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const renderedItem = faqs.map((item, index) => (
    <Item item={item} index={index} />
  ));

  return <div className="accordion">{renderedItem}</div>;
}

function Item({ item, index }) {
  const { title, text } = item;
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? "item open" : "item"}>
      <p className="number"> {"0" + (index + 1)}</p>
      <p className="title">{title}</p>
      <p onClick={() => setOpen(!open)} className="icon">
        {open ? "-" : "+"}
      </p>
      {open ? <p className="content-box"> {text}</p> : ""}
    </div>
  );
}
