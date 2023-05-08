import { React } from "react";
import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Buttons = ({ children }) => {
  const swiper = useSwiper();
  return (
    <>
      <MdKeyboardArrowLeft
        className="pointers-icons left"
        onClick={() => swiper.slidePrev()}
      >
        {children}
      </MdKeyboardArrowLeft>
      <MdKeyboardArrowRight
        className="pointers-icons right"
        onClick={() => swiper.slideNext()}
      >
        {children}
      </MdKeyboardArrowRight>
    </>
  );
};
export default Buttons;
