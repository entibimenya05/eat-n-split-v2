//since we are going to need to use button component in
//many places, let's create that component and specify children props
function Button({ children }) {
  return <butto className="button">{children}</butto>;
}
export default Button;
