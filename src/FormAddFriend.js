import Button from "./Button";
import { useState } from "react";
//the children is what is between the opening and closing tag of the Button component
function FormAddFriend({ onAddFriend }) {
  //adding a friend
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    //guard close: don't submit if there is no nmae or image
    if (!name || !image) return;

    const id = crypto.randomUUID();

    //create a new friend object so that we can add it to the array
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    //instead of logging it to the console, we want to call the new function
    // console.log(newFriend);
    onAddFriend(newFriend);
    //going back to the default after submitting the form
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    //stage 3 is to listen to onSubmit event
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> 👬 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌅 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
export default FormAddFriend;
