import Button from "./Button";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X x</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🕴Your Expense</label>
      <input type="text" />
      <label>👬 x's expense</label>
      <input type="text" disabled />
      <label> 🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
export default FormSplitBill;
