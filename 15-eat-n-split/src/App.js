import { useState } from "react";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import BillSplit from "./BillSplit";
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
  const [friends, setfriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handlerClick() {
    setAddFriend((show) => !show);
  }
  function addFriendList(newfriend) {
    setfriends((oldFriend) => [...oldFriend, newfriend]);
    setAddFriend(!addFriend);
  }
  function handleSplit(value) {
    setfriends(
      friends.map((currFriend) =>
        currFriend.id === selectedFriend.id
          ? { ...currFriend, balance: currFriend.balance + value }
          : currFriend
      )
    );
    setSelectedFriend(null);
  }

  function handlerSelectedFriend(pickedFriend) {
    // setSelectedFriend(pickedFriend);
    setSelectedFriend((curr) =>
      curr?.id === pickedFriend.id ? null : pickedFriend
    );
    setAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handlerSelectedFriend}
          selectedFriend={selectedFriend}
        />

        {addFriend && <FormAddFriend onAddFriend={addFriendList} />}

        <Button handleClick={handlerClick}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <BillSplit
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplit={handleSplit}
        />
      )}
    </div>
  );
}
