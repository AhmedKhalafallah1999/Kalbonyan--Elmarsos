import { useState, useEffect } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import "./CarsSlider.css";
// for slider component
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialsData from "../../data.json";
import Buttons from "./button";

const CarsSlider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  console.log(windowWidth);
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      className="cars-cards container"
      spaceBetween={50}
      slidesPerView={
        windowWidth < 600 ? 1 : windowWidth >= 600 && windowWidth < 1200 ? 2 : 3
      }
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {TestimonialsData.cars.map((item, index) => {
        return (
          <SwiperSlide className="card" key={index}>
            <div>
              <img src={item.image} alt="car_categories"></img>
              <div className="car-info">
                <h3>{item.class}</h3>
                <p>{item.name}</p>
                <p className="description">{item.description}</p>
              </div>
              <div className="category">
                <div className="left-description">
                  <div className="cat1">
                    <BsPeopleFill className="cat1-icon" />
                    <p>{item.seats} Seats</p>
                  </div>
                  <div className="cat2">
                    <MdLuggage className="cat2-icon" />
                    <p>{item.luggage} Luggage</p>
                  </div>
                </div>
                <div className="right-description">
                  <button className="minus">-</button>
                  <span>7</span>
                  <button className="plus">+</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <Buttons>next</Buttons>
    </Swiper>
  );
};
export default CarsSlider;
