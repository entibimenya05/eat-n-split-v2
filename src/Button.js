//since we are going to need to use button component in
//many places, let's create that component and specify children props
//updating showAddFriend with onClick
function Button({ children, onClick }) {
  return (
    <butto className="button" onClick={onClick}>
      {children}
    </butto>
  );
}
export default Button;
