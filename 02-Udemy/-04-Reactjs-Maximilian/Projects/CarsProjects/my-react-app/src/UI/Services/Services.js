import Heading from "../../Components/Heading/Heading";
import "./Services.css";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
const Services = () => {
  return (
    <div className="services-section">
      <div className="container  ">
        <Heading h1={"SERVICES"} h5={"Services"}></Heading>
        <div className="services-card">
          <div>
            <img src={icon1}  alt="icon"></img>
            <h2>Car sales</h2>
            <p>
              At YourCar, we offer a wide selection of luxury vehicles for sale.
              Whether you're in the market for a sleek sports car or a spacious
              SUV, we have the perfect vehicle to fit your needs.
            </p>
          </div>
          <div>
            <img src={icon2}  alt="icon"></img>
            <h2>Car rental</h2>
            <p>
              If you're in need of a luxury car rental, look no further than
              YourCar. Our fleet of high-end vehicles is regularly maintained
              and serviced to ensure that you have a safe and comfortable
              driving experience.
            </p>
          </div>
          <div>
            <img src={icon3} alt="icon"></img>
            <h2>Car selling</h2>
            <p>
              At YourCar, we make it easy to sell your car. Simply bring your
              vehicle in for an appraisal, and we'll handle the rest. We offer
              fair prices and a hassle-free selling process, so you can get your
              vehicle with minimal effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
