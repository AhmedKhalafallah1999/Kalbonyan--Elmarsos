import "./HeroSection.css";
import { BsArrowUpRight } from "react-icons/bs";
// import Header from "../Header/header";
const HeroSection = () => {
  return (
    <div className="heroSection">
      {/* <Header></Header> */}
      {/* <img src={background} alt="car Landing" /> */}
      <div className="heading">
        <h1>Find the perfect car for you at YourCar.</h1>
        <div className="info-section">
        <p>
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </p>
        <button>
          <a href="...">
            Discover <BsArrowUpRight />
          </a>
        </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
