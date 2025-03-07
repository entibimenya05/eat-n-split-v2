import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

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
function App() {
  //showing newFriend on the FriendList by lifting up state
  const [friends, setFriends] = useState(initialFriends);
  //display the form AddFriend conditionally
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  //the below will recieve the new friend, then take the current friends and add the new friend
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    //to  hide the form after submitting
    setShowAddFriend(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {/*conditioanally showAddFrien*/}
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
export default App;
