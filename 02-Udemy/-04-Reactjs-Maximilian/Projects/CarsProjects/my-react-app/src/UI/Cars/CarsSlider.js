import { BsPeopleFill } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import car from "./car4.png";
import "./CarsSlider.css";
const CarsSlider = () => {
  return (
    <div className="cars-cards container">
      <div className="card">
        <img src={car} alt="car_categories"></img>
        <div className="car-info">
          <h3>First Class</h3>
          <p>Mercedes maybach s600</p>
          <p>
            The Porsche 911 is a true icon in the sports car world, known for
            its sleek design, impressive performance, and superior handling.
            It's a two-door, two-seat coupe that's perfect for those who love to
            feel the wind in their hair and the road beneath their wheels.
          </p>
        </div>
        <div className="category">
          <div className="left-description">
            <div className="cat1">
              <BsPeopleFill className="cat1-icon" />
              <p>4 Seats</p>
            </div>
            <div className="cat2">
              <MdLuggage className="cat2-icon" />
              <p>2 Luggage</p>
            </div>
          </div>
          <div className="right-description"></div>
        </div>
      </div>
      <div className="card">
        <img src={car} alt="car_categories"></img>
        <div className="car-info">
          <h3>First Class</h3>
          <p>Mercedes maybach s600</p>
          <p>
            The Porsche 911 is a true icon in the sports car world, known for
            its sleek design, impressive performance, and superior handling.
            It's a two-door, two-seat coupe that's perfect for those who love to
            feel the wind in their hair and the road beneath their wheels.
          </p>
        </div>
        <div className="category">
          <div className="left-description">
            <div className="cat1">
              <BsPeopleFill className="cat1-icon" />
              <p>4 Seats</p>
            </div>
            <div className="cat2">
              <MdLuggage className="cat2-icon" />
              <p>2 Luggage</p>
            </div>
          </div>
          <div className="right-description"></div>
        </div>
      </div>
      <div className="card">
        <img src={car} alt="car_categories"></img>
        <div className="car-info">
          <h3>First Class</h3>
          <p>Mercedes maybach s600</p>
          <p>
            The Porsche 911 is a true icon in the sports car world, known for
            its sleek design, impressive performance, and superior handling.
            It's a two-door, two-seat coupe that's perfect for those who love to
            feel the wind in their hair and the road beneath their wheels.
          </p>
        </div>
        <div className="category">
          <div className="left-description">
            <div className="cat1">
              <BsPeopleFill className="cat1-icon" />
              <p>4 Seats</p>
            </div>
            <div className="cat2">
              <MdLuggage className="cat2-icon" />
              <p>2 Luggage</p>
            </div>
          </div>
          <div className="right-description"></div>
        </div>
      </div>
    </div>
  );
};
export default CarsSlider;
