import React,{useContext} from 'react';
import autho from '../store/Auto-Context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctx = useContext(autho);
  return (
    // <autho.Consumer>
    //   {(ctx)=>{
    //     return(
    //     <nav className={classes.nav}>
    //     <ul>
    //       {ctx.isLoggedIn && (
    //         <li>
    //           <a href="/">Users</a>
    //         </li>
    //       )}
    //       {ctx.isLoggedIn && (
    //         <li>
    //           <a href="/">Admin</a>
    //         </li>
    //       )}
    //       {ctx.isLoggedIn && (
    //         <li>
    //           <button onClick={props.onLogout}>Logout</button>
    //         </li>
    //       )}
    //     </ul>
    //   </nav>
    //   )}}
    
    // </autho.Consumer>
    <nav className={classes.nav}>
    <ul>
      {ctx.isLoggedIn && (
        <li>
          <a href="/">Users</a>
        </li>
      )}
      {ctx.isLoggedIn && (
        <li>
          <a href="/">Admin</a>
        </li>
      )}
      {ctx.isLoggedIn && (
        <li>
          <button onClick={ctx.onLogout}>Logout</button>
        </li>
      )}
    </ul>
  </nav>
    );
};

export default Navigation;
