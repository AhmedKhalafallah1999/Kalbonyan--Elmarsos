import "./Header.css";
import { NavLink, Link, Outlet } from "react-router-dom";
// import logo from "./logo.png";
import { FiShoppingCart } from "react-icons/fi";
// for using counter from the store to print on the cart
import { useSelector, useDispatch } from "react-redux";
import { shownAction } from "../../Store/Store";
import { BsList } from "react-icons/bs";
import { useState, useEffect } from "react";
import { counterActions, carsDataActions } from "../../Store/Store";
// import { shownAction } from "../../Store/Store";
const Header = (props) => {
  const counterDispatch = useDispatch();
  const ProductsDispatch = useDispatch();
  const shownDispatch = useDispatch();

  window.onload = function () {
    const counter = JSON.parse(localStorage.getItem("counter"));
    if (counter)
    counterDispatch(counterActions.initilize(counter));
    const ProductsData = JSON.parse(localStorage.getItem("DataArray"));
    if (ProductsData)
    ProductsDispatch(carsDataActions.initilize(ProductsData));
    const showCart = JSON.parse(localStorage.getItem("CardShow"));
    ProductsDispatch(shownAction.initilize(showCart));
  };

  const counter = useSelector((state) => state.counter.counter);
  const brevStateShow = useSelector((state) => state.shownCard.shownNavigation);
  const [navbar, setNavBar] = useState(false);
  function changBackground() {
    if (window.scrollY >= 750) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (props.specialHeader) {
      const headerSpeaial = document.querySelector("header");
      headerSpeaial.classList.add("header-scrolledSpecial");
      // headerSpeaial.classList.add("margin");
    } else {
      const headerSpeaial = document.querySelector("header");
      headerSpeaial.classList.remove("header-scrolledSpecial");
      // headerSpeaial.classList.remove("margin");
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  if (windowWidth > 940) {
    shownDispatch(
      shownAction.shownNavigation({ type: "screen", payload: false })
    );
  }

  window.addEventListener("scroll", changBackground);
  function handlerCard() {
    shownDispatch(shownAction.shown());
  }
  function handlerNavigationCard() {
    shownDispatch(
      shownAction.shownNavigation({ type: "bar", payload: brevStateShow })
    );
  }

  // console.log(shownState);
  return (
    <>
      <header
        className={
          navbar ? "header container header-scrolled" : "header container "
        }
      >
        <div>
          {/* <img src={logo} alt="jj" /> */}
          <h1>
            Your<span>Car</span>
          </h1>
        </div>

        <ul className="nav">
          <li className="link">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to={"/services"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Services
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to={"/cars"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Cars
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to={"/contactus"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <Link className="icon" to={"/"} onClick={handlerCard}>
              <FiShoppingCart />
            </Link>
          </li>
          <li className="smallNavBar">
            <Link className="icon" onClick={handlerNavigationCard}>
              <BsList />
            </Link>
          </li>
        </ul>
        <div className="card-number">{counter}</div>
      </header>
      <Outlet />
    </>
  );
};
export default Header;
