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
  {
    title: "Do you give discount?",
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
  const [open, setOpen] = useState(null);
  const renderedItem = faqs.map((item, index) => (
    <Item
      key={index}
      title={item.title}
      index={index}
      handlerOpen={setOpen}
      open={open}
    >
      {item.text}
    </Item>
  ));

  return <div className="accordion">{renderedItem}</div>;
}

function Item({ title, index, handlerOpen, open, children }) {
  const isOpen = index === open;
  console.log("index = ", index, " open= ", open, " isOpen= ", isOpen);
  function handleToggle() {
    handlerOpen(isOpen ? null : index);
  }
  return (
    <div onClick={handleToggle} className={isOpen ? "item open" : "item"}>
      <p className="number"> {"0" + (index + 1)}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box"> {children}</p>}
    </div>
  );
}
