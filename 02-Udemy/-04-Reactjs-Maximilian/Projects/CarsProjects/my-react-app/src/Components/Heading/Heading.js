import "./Heading.css";
const Heading = (props) => {
  return (
    <div className="special-heading">
      <h1>{props.h1}</h1>
      <h5>{props.h5}</h5>
    </div>
  );
};
export default Heading;