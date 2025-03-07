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
  //selecting a friend
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  //the below will recieve the new friend, then take the current friends and add the new friend
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    //to  hide the form after submitting
    setShowAddFriend(false);
  }
  //set the selected friend to the friend object it will receive
  function handleSelection(friend) {
    // setSelectedFriend(friend);
    //to make the Close button work
    //currently selected friend does not allways exist hence use ? optional chaining
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    //select friend firsh then hide AddFriendForm
    setShowAddFriend(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {/*conditioanally showAddFrien*/}
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {/*conditionally display SplitBillForm*/}
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}
export default App;
