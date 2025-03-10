import Button from "./Button";
import { useState } from "react";
function FormSplitBill({ selectedFriend, onSplitBill }) {
  //controlled elements
  //empty string b/se these are input text elements
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  //derived state
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    //guard clause
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    //implementing the logic
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name} </h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🕴Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👬 {selectedFriend.name}'s expense</label>
      {/*here we only specify the value b/se it is disabled*/}
      <input type="text" disabled value={paidByFriend} />
      <label> 🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
export default FormSplitBill;
