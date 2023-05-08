import "./Heading.css";
const Heading = (props) => {
  let classPointer;
  if (props.type === "services") {
    classPointer = "special-heading services";
  } else if(props.type==='aboutUs'){
    classPointer = "special-heading aboutUs";
  } else if (props.type==='testimonials'){
    classPointer = "special-heading testimonials";
  } else if(props.type === "cars"){
    classPointer = "special-heading cars";
  }
  return (
    <div className={classPointer}>
      <h1>{props.h1}</h1>
      <h5>{props.h5}</h5>
    </div>
  );
};
export default Heading;
