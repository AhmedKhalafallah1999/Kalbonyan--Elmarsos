import Heading from "../../Components/Heading/Heading";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarsSlider from "./CarsSlider";
import "./Cars.css";
const Cars = () => {
  return (
    <div className="cars-section">
      <Heading h1={"CARS"} h5={"Cars"} type={"services"} />
      <CarsSlider />
      <MdKeyboardArrowLeft className="pointers-icons left" />
      <MdKeyboardArrowRight className="pointers-icons right" />
      
    </div>
  );
};
export default Cars;
