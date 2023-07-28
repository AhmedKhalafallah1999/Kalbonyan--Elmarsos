import Heading from "../../Components/Heading/Heading";
import SliderTestimonials from "./SliderTestimonials";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <Heading
        h1={"TESTIMONIALS"}
        h5={"Testimonials"}
        type={"testimonials"}
      ></Heading>
      <SliderTestimonials />
    </div>
  );
};
export default Testimonials;
