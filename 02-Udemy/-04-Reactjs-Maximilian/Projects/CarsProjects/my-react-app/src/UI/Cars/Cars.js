import Heading from "../../Components/Heading/Heading";
import CarsSlider from "./CarsSlider";
import "./Cars.css";
const Cars = () => {
  return (
    <div className="cars-section">
      <Heading h1={"CARS"} h5={"Cars"} type={"cars"} />
      <CarsSlider />
      
    </div>
  );
};
export default Cars;
