import Heading from "../../Components/Heading/Heading";
import "./Testimonials.css";
import { AiOutlineStar } from "react-icons/ai";
import TestimonialCar from "./testimonials.png";
import TestimonialsData from "../../data.json";
const Testimonials = () => {
  console.log(TestimonialsData.testimonials[0].name);
  return (
    <div className="testimonials-section">
      <Heading
        h1={"TESTIMONIALS"}
        h5={"Testimonials"}
        type={"testimonials"}
      ></Heading>
      <div className="dataFetching">
        <p>
          I recently bought a car through YourCar and I was blown away by their
          exceptional service. The staff were friendly and knowledgeable, and
          they helped me find the perfect car for my needs. I highly recommend
          YourCar to anyone looking for a luxury car buying experience.
        </p>
        <div>
          <AiOutlineStar></AiOutlineStar>
          <AiOutlineStar></AiOutlineStar>
          <AiOutlineStar></AiOutlineStar>
          <AiOutlineStar></AiOutlineStar>
          <AiOutlineStar></AiOutlineStar>
        </div>
        <div className="signiture">
          <h1>Annie Rudy</h1>
          <span>Las Vegas</span>
          <img src={TestimonialsData.cars[0].image} alt="car-test"></img>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
