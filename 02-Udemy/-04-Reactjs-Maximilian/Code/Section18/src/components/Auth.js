import classes from './Auth.module.css';
import { authActions } from "../store/Auth";
import {  useDispatch } from "react-redux";
const Auth = () => {
  // const isAuthincated = useSelector((state) => state.isAuth.isAuthinacated);
  const dispatch = useDispatch();
  const isAuthHandler = (event)=>{
    event.preventDefault();
    dispatch(authActions.logIn());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={isAuthHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
