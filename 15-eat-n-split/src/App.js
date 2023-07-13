import { useState } from "react";
import Friend from "./Friend";
import BillSplit from "./BillSplit";
import Add from "./Add";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  const renderedItems = initialFriends.map((ele, index) => {
    return <Friend friend={ele} key={index} />;
  });

  return (
    <div className="app">
      <div className="sidebar">
        <ul>{renderedItems}</ul>
        <button className="button">Add Friend</button>
      </div>
      <BillSplit />
      {/* <Add /> */}
    </div>
  );
}
