import "./SideNav.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const SideNav = () => {
  const shownState = useSelector((state) => state.shownCard.shownNavigation);

  return (
    <>
      {shownState && (
        <div className="SideNav">
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
          </ul>
        </div>
      )}
    </>
  );
};
export default SideNav;
