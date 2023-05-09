import { useState, useEffect } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./CarsSlider.css";
// for slider component
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialsData from "../../data.json";
// for using dispatch and edit the storedata
import { counterActions, carsDataActions } from "../../Store/Store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CarsSlider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperRef = useRef();
  const counterDispatch = useDispatch();
  const carsDataDispatch = useDispatch();
  const carsSelector = useSelector((state) => state.carsData.Data);
  console.log(carsSelector);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <>
      <Swiper
        modules={[Pagination, A11y]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="cars-cards container"
        spaceBetween={50}
        slidesPerView={
          windowWidth < 600
            ? 1
            : windowWidth >= 600 && windowWidth < 1200
            ? 2
            : 3
        }
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
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
                    <button
                      className="minus"
                      onClick={() => {
                        counterDispatch(counterActions.decrement());
                        carsDataDispatch(carsDataActions.decreament(index));
                      }}
                    >
                      -
                    </button>
                    <span>0</span>
                    <button
                      className="plus"
                      onClick={() => {
                        counterDispatch(counterActions.increament());
                        carsDataDispatch(
                          carsDataActions.increament({
                            id: index,
                            seats: item.seats,
                            name: item.name,
                            image: item.image,
                            Amount: 1,
                          })
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <MdKeyboardArrowLeft
        className="pointers-icons left"
        onClick={() => swiperRef.current.slidePrev()}
      >
        Next
      </MdKeyboardArrowLeft>
      <MdKeyboardArrowRight
        className="pointers-icons right"
        onClick={() => swiperRef.current.slideNext()}
      >
        Prev
      </MdKeyboardArrowRight>
    </>
  );
};
export default CarsSlider;
