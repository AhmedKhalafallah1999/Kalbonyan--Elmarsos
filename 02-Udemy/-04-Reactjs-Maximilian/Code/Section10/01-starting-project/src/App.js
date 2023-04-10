import React, { useState, useEffect } from "react";
import autho from "./components/store/Auto-Context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const StateOfUserRemember = localStorage.getItem("logInState");
    if (StateOfUserRemember === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("logInState", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("logInState", "0");

    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <autho.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </autho.Provider>
    </React.Fragment>
  );
}

export default App;
