import React, { useState } from "react";
import "./Testimonials.css";
import { AiOutlineStar } from "react-icons/ai";
import TestimonialsData from "../../data.json";
const SliderTestimonials = () => {
  const [current, setActiveScreen] = useState(0);

  const sliderNext = () => {
    setActiveScreen(
      current === TestimonialsData.testimonials.length - 1 ? 0 : current + 1
    );
  };
  return (
    <>
      <div className="slider">
        {TestimonialsData.testimonials.map((item, index) => {
          return (
            <div
              className={
                current !== index ? "dataFetching none" : "dataFetching visible"
              }
              key={index}
              onClick={sliderNext}
            >
              {current === index && (
                <>
                  <p>{item.description}</p>
                  <div>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                  </div>
                  <div className="signiture">
                    <h1>{item.name}</h1>
                    <span>Las Vegas</span>
                    <img src={item.image} alt="car-test"></img>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="pointers">
        {TestimonialsData.testimonials.map((item, index) => {
          return (
            <div
              className={current === index ? "pointer active" : "pointer"}
              key={index}
              onClick={() => {
                setActiveScreen(index);
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default SliderTestimonials;
