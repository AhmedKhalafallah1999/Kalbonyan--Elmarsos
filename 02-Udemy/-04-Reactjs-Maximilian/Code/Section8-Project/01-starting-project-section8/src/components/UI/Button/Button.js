import "./Button.css";
const Button = (props) => {
  return (
    <button type="submit" className="button">
      {props.Target}
    </button>
  );
};
export default Button;
