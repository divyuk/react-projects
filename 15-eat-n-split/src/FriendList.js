import Friend from "./Friend";

export default function FriendList({ friends, onSelection, selectedFriend }) {
  const renderedItems = friends.map((friend, index) => {
    return (
      <Friend
        friend={friend}
        key={friend.id}
        onSelection={onSelection}
        selectedFriend={selectedFriend}
      />
    );
  });

  return <ul>{renderedItems} </ul>;
}
