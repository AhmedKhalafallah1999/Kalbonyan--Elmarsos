import classes from "./Header.module.css";
import { authActions } from "../store/Auth";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const isAuthincated = useSelector((state) => state.isAuth.isAuthinacated);
  const dispatch = useDispatch();
  const isAuthOffHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logOut());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthincated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={isAuthOffHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
