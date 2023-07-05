import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id != selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)} //TOO Many Renders err if callback not passed
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

// function FlashCards() {
//   const [selectedCardId, setSelectedCardId] = useState(null);

//   function handleSelectCard(id) {
//     setSelectedCardId(id);
//   }

//   const renderedItems = questions.map((item) => {
//     const isSelected = selectedCardId === item.id;
//     const { id, question, answer } = item;

//     return (
//       <div
//         className={isSelected ? "flashcard selected" : "flashcard"}
//         key={id}
//         onClick={() => handleSelectCard(id)}
//       >
//         {isSelected ? answer : question}
//       </div>
//     );
//   });

//   return <div className="flashcards">{renderedItems}</div>;
// }

// function FlashCards() {
//   // const [select, setSelect] = useState(true);
//   const renderedItems = questions.map((item) => {
//     return <FlashCard item={item} key={item.id} />;
//   });
//   return <div className="flashcards">{renderedItems}</div>;
// }
// function FlashCard({ item }) {
//   const { id, question, answer } = item;
//   const [select, setSelect] = useState(false);
//   function handleSelect() {
//     setSelect(!select);
//   }
//   return (
//     <div className={select ? "selected" : ""} onClick={handleSelect}>
//       {select ? answer : question}
//     </div>
//   );
// }
