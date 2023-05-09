import "./Header.css";
import { NavLink, Outlet } from "react-router-dom";
// import logo from "./logo.png";
import { FiShoppingCart } from "react-icons/fi";
// for using counter from the store to print on the cart
import { useSelector } from "react-redux";
const Header = () => {
  const counter = useSelector((state) => state.counter.counter);
  const Data = useSelector((state) => state.carsData.Data);
  console.log(Data);
  return (
    <>
      <div className="header container">
        <div>
          {/* <img src={logo} alt="jj" /> */}
          <h1>
            Your<span>Car</span>
          </h1>
        </div>

        <ul className="nav">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cars"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contactus"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <a className="icon" href={".."}>
              <FiShoppingCart />
            </a>
          </li>
        </ul>
        <div className="card-number">{counter}</div>
      </div>
      <Outlet />
    </>
  );
};
export default Header;
