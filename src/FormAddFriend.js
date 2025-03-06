import Button from "./Button";
//the children is what is between the opening and closing tag of the Button component
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label> 👬 Friend Name</label>
      <input type="text" />
      <label>🌅 Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}
export default FormAddFriend;
