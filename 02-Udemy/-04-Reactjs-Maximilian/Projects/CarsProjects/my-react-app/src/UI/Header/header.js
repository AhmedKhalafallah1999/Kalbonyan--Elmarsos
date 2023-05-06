import "./Header.css";
import logo from "./logo.png";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <div className="header container">
      <div>
        <img src={logo} alt="jj" />
      </div>

      <ul>
        <li>
          <a href={".."}>Home</a>
        </li>
        <li>
          <a href={".."}>About</a>
        </li>
        <li>
          <a href={".."}>Services</a>
        </li>
        <li>
          <a href={".."}>Cars</a>
        </li>
        <li>
          <a href={".."}>Contact Us</a>
        </li>
        <li>
          <a className="icon" href={".."}>
            <FiShoppingCart />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
