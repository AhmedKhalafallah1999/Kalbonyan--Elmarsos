import "./Footer.css";
import { ImLocation2 } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";
import { RiMessageFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className=" container">
      <div className="colum-footer">
        <div className="your-car">
          <h1 className="special-name">YourCar</h1>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
            <br />
            <br /> we are dedicated to providing our customers with a
            first-class car buying, selling, and renting experience.
          </p>
        </div>
        <div className="news-letter">
          <h1>News Letter</h1>
          <p>
            Subscribe to our news letter for
            <br /> updates, news and exclusive offers
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Email"></input>
            <button type="submit">Subscribe</button>
          </div>
          {/* <div className="social-icons">
            <ion-icon class="icon-social" name="logo-facebook"></ion-icon>
            <ion-icon class="icon-social" name="logo-twitter"></ion-icon>
            <ion-icon class="icon-social" name="logo-instagram"></ion-icon>
          </div> */}
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <ul>
            <li>
              <ImLocation2 />
              2038 2nd Avenue,
              <br /> Las Vegas, United States
            </li>
            <li>
              <AiFillPhone />
              2038 2nd Avenue, <br />
              Las Vegas, United States
            </li>
            <li>
              <RiMessageFill />
              2038 2nd Avenue, <br />
              Las Vegas, United States
            </li>
          </ul>
        </div>
      </div>
      <div className="social-icons">
            <ion-icon class="icon-social" name="logo-facebook"></ion-icon>
            <ion-icon class="icon-social" name="logo-twitter"></ion-icon>
            <ion-icon class="icon-social" name="logo-instagram"></ion-icon>
          </div>
      <div className="copy-right">
        <p>
          © Copyright 2023 · <strong>YourCar</strong> All rights reserved{" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
